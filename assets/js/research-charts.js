/* Progressive enhancement: all chart data remains readable in HTML tables. */
(() => {
  const data = window.RESEARCH_DATA || {};
  const sources = Object.values(window.SOURCE_CATALOG || {});
  const format = (value, unit) => unit === 'dollars'
    ? new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 0}).format(value)
    : new Intl.NumberFormat('en-US', {maximumFractionDigits: unit === 'percent' ? 2 : 0}).format(value) + (unit === 'percent' ? '%' : '');

  document.querySelectorAll('[data-chart]').forEach(card => {
    const dataset = data[card.dataset.chart];
    if (!dataset) return;
    const view = card.querySelector('.chart-plot');
    const select = card.querySelector('[data-measure]');
    const sort = card.querySelector('[data-sort]');
    const search = card.querySelector('[data-filter]');
    const detail = card.querySelector('.chart-detail');
    const range = dataset.id.startsWith('atlas-');
    const dots = dataset.id === 'wage-percentiles';
    const max = dataset.unit === 'percent' ? 100 : Math.ceil(Math.max(...dataset.rows.flatMap(r => r.slice(1))) / (dataset.unit === 'dollars' ? 10000 : 1000)) * (dataset.unit === 'dollars' ? 10000 : 1000);
    const announce = message => { detail.textContent = message; };

    function render() {
      const column = Number(select?.value || 0) + 1;
      let rows = dataset.rows.filter(r => r[0].toLowerCase().includes((search?.value || '').trim().toLowerCase()));
      if (sort.value === 'high') rows = [...rows].sort((a,b) => b[column]-a[column]);
      if (sort.value === 'low') rows = [...rows].sort((a,b) => a[column]-b[column]);
      view.replaceChildren();
      const axis = document.createElement('div');
      axis.className = 'chart-axis';
      axis.innerHTML = '<span class="axis-label"></span><span class="axis-scale"><span>0</span><span></span><span></span></span><span></span>';
      axis.querySelector('.axis-scale').children[1].textContent = format(max / 2, dataset.unit);
      axis.querySelector('.axis-scale').children[2].textContent = format(max, dataset.unit);
      view.append(axis);
      rows.forEach(row => {
        const item = document.createElement('button');
        item.type = 'button';
        item.className = 'plot-row';
        const label = document.createElement('span');
        label.className = 'plot-label';
        label.textContent = row[0];
        const track = document.createElement('span');
        track.className = 'plot-track';
        track.setAttribute('aria-hidden', 'true');
        const mark = document.createElement('span');
        mark.className = 'plot-mark' + (range ? ' plot-range' : dots ? ' plot-dot' : '');
        if (range) {
          mark.style.left = (row[1] / max * 100) + '%';
          mark.style.width = ((row[2] - row[1]) / max * 100) + '%';
        } else if (dots) {
          mark.style.left = (row[column] / max * 100) + '%';
        } else {
          mark.style.width = (row[column] / max * 100) + '%';
        }
        track.append(mark);
        const value = document.createElement('strong');
        value.className = 'plot-value';
        value.textContent = range ? format(row[1], dataset.unit) + '–' + format(row[2], dataset.unit) : format(row[column], dataset.unit);
        const description = row[0] + ': ' + value.textContent + (range ? ' (range recorded in the paper)' : ' · ' + dataset.columns[column-1][1]) + '. ' + dataset.period + '. ' + dataset.geography + '.';
        item.setAttribute('aria-label', description);
        item.addEventListener('click', () => {
          view.querySelectorAll('.plot-row').forEach(r => r.classList.remove('is-selected'));
          item.classList.add('is-selected');
          announce(description);
        });
        item.addEventListener('mouseenter', () => announce(description));
        item.addEventListener('focus', () => announce(description));
        item.append(label,track,value);
        view.append(item);
      });
      if (!rows.length) {
        const empty = document.createElement('p');
        empty.textContent = 'No categories match. Clear the filter to show all values.';
        view.append(empty);
      }
      announce(rows.length + (rows.length === 1 ? ' category shown.' : ' categories shown.') + ' Select a bar or point for its details.');
    }
    select?.addEventListener('change', render);
    sort.addEventListener('change', render);
    search?.addEventListener('input', render);
    card.querySelector('[data-download]').addEventListener('click', () => {
      const source = sources.find(s => s.number === dataset.source);
      const escape = value => '"' + String(value ?? '').replaceAll('"', '""') + '"';
      const rows = [['Category', ...dataset.columns.map(c => c[1]), 'Unit', 'Period', 'Geography', 'Review status', 'Source URL', 'Manuscript pages', 'Notes'], ...dataset.rows.map(row => [...row, dataset.unit, dataset.period, dataset.geography, dataset.status, source?.url || '', dataset.pages, dataset.note])];
      const blob = new Blob(['\uFEFF' + rows.map(r => r.map(escape).join(',')).join('\r\n')], {type: 'text/csv;charset=utf-8;'});
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'syracuse-' + dataset.id + '.csv';
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
    card.querySelector('.chart-tools').hidden = false;
    card.querySelector('details').open = false;
    render();
  });

  // Chart enhancement changes page height; restore an incoming section link afterward.
  if (location.hash) {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { id = ''; }
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({behavior: 'instant', block: 'start'}));
  }

  const map = document.querySelector('[data-map-frame]');
  const mapChoice = document.querySelector('#map-layer');
  if (map && mapChoice) {
    const layers = {
      poverty: {url:'https://pro.cnyvitals.org/profile/syracuse/PovertyMap',title:'CNYVitals: residents below poverty by census tract',note:'Residents below the poverty line · 2024 ACS release. This is a count, not a poverty rate. Use the source map’s controls to inspect tracts.'},
      lead: {url:'https://pro.cnyvitals.org/profile/syracuse/OCHDLead',title:'CNYVitals: elevated blood lead levels by census tract',note:'Elevated blood lead levels · 2025. The source uses a 5 µg/dL threshold. A percentage and a count describe different things; compare map legends carefully.'}
    };
    mapChoice.addEventListener('change', () => {
      const layer = layers[mapChoice.value];
      map.src = layer.url;
      map.title = layer.title;
      document.querySelector('[data-map-note]').textContent = layer.note;
      document.querySelector('[data-map-link]').href = layer.url;
    });
  }

  const sourceSearch = document.querySelector('#source-search');
  sourceSearch?.addEventListener('input', () => {
    const term = sourceSearch.value.trim().toLowerCase();
    let count = 0;
    document.querySelectorAll('.source-entry').forEach(entry => {
      entry.hidden = !entry.textContent.toLowerCase().includes(term);
      if (!entry.hidden) count++;
    });
    document.querySelectorAll('.source-category').forEach(group => {
      group.hidden = !Array.from(group.querySelectorAll('.source-entry')).some(entry => !entry.hidden);
    });
    document.querySelector('#source-results').textContent = count + (count === 1 ? ' source shown' : ' sources shown');
  });
})();
