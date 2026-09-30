/* Run with Node.js; no dependencies required. */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const context = {window: {}};
for (const file of ['research-data.js', 'source-catalog.js']) {
  vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/js', file), 'utf8'), context);
}
const data = context.window.RESEARCH_DATA;
const sources = context.window.SOURCE_CATALOG;
const htmlFiles = fs.readdirSync(root).filter(f => f.endsWith('.html'));
const contents = Object.fromEntries(htmlFiles.map(f => [f, fs.readFileSync(path.join(root, f), 'utf8')]));
const ids = Object.fromEntries(Object.entries(contents).map(([file, html]) => {
  const values = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(values).size, values.length, file + ': duplicate IDs');
  return [file, new Set(values)];
}));
let links = 0;
const seenCharts = new Set();
for (const [file, html] of Object.entries(contents)) {
  assert.equal((html.match(/<h1\b/g) || []).length, 1, file + ': exactly one page heading');
  assert(!/undefined|NaN|TODO|Lorem ipsum/.test(html), file + ': unexpected placeholder');
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (/^(?:https?:|mailto:|data:)/.test(url)) continue;
    const [target, fragment] = url.split('#');
    const destination = (target || file).split('?')[0];
    assert(fs.existsSync(path.join(root, destination)), file + ': missing target ' + url);
    if (fragment && ids[destination]) assert(ids[destination].has(fragment), file + ': missing anchor ' + url);
    links++;
  }
  for (const match of html.matchAll(/<a\b[^>]*class="source-ref"[^>]*href="sources.html#([^"]+)"[^>]*>\[(\d+)\]<\/a>/g)) {
    assert(sources[match[1]], file + ': missing citation record');
    assert.equal(sources[match[1]].number, Number(match[2]), file + ': wrong citation number');
  }
  for (const match of html.matchAll(/<figure\b[^>]*data-chart="([^"]+)"[\s\S]*?<\/figure>/g)) {
    const id = match[1], chart = data[id];
    assert(chart, file + ': missing dataset ' + id);
    seenCharts.add(id);
    assert(Object.values(sources).some(s => s.number === chart.source), id + ': source missing');
    assert(chart.period && chart.geography && chart.note && chart.status && chart.pages, id + ': missing provenance');
    assert.equal((match[0].match(/<tr>/g) || []).length, chart.rows.length + 1, id + ': table row count');
    const tableRows = [...match[0].matchAll(/<tr>([\s\S]*?)<\/tr>/g)].slice(1);
    tableRows.forEach((tr, index) => {
      const cells = [...tr[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g)].map(m => m[1].replace(/<[^>]+>/g, ''));
      for (let column = 1; column < cells.length; column++) {
        assert.equal(Number(cells[column].replace(/[$,%]/g, '')), chart.rows[index][column], id + ': static table differs from chart');
      }
    });
    for (const row of chart.rows) {
      assert.equal(row.length, chart.columns.length + 1, id + ': column count');
      assert(row.slice(1).every(Number.isFinite), id + ': nonnumeric value');
      if (chart.unit === 'percent') assert(row.slice(1).every(n => n >= 0 && n <= 100), id + ': percentage bounds');
    }
  }
}
assert.equal(seenCharts.size, Object.keys(data).length, 'Every maintained dataset must appear in a chart');
for (const id of Object.keys(sources)) assert(ids['sources.html'].has(id), id + ': missing source directory entry');
assert.equal(new Set(Object.values(sources).map(s => s.number)).size, Object.keys(sources).length, 'Source numbers must be unique');
assert(Math.abs(data.income.rows.reduce((sum, row) => sum + row[1], 0) - 99.9) < .01, 'Income distribution total');
assert.equal(data.tenure.rows.reduce((sum, row) => sum + row[1], 0), 59816, 'Occupied housing count');
console.log('PASS: ' + htmlFiles.length + ' pages, ' + seenCharts.size + ' chart datasets, ' + Object.keys(sources).length + ' citations, ' + links + ' local links/assets.');
