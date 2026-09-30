const chartColors = {
  orange: '#e77942',
  darkOrange: '#b9502d',
  peach: '#f4b183',
  ink: '#17222d',
  cream: '#fde9da'
};

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});

function formatValue(value, unit) {
  return unit === '$' ? currency.format(value) : `${value}%`;
}

async function loadFindings() {
  const response = await fetch('data/processed/verified-metrics-2024.json');
  if (!response.ok) throw new Error('Verified data could not be loaded.');
  return response.json();
}

function createComparisonChart(data) {
  const selector = document.querySelector('#metric-selector');
  const note = document.querySelector('#comparison-note');
  const canvas = document.querySelector('#comparison-chart');
  if (!selector || !note || !canvas) return;

  const updateChart = (metricKey) => {
    const metric = data.comparison[metricKey];
    const labels = Object.keys(metric).filter((key) => !['label', 'unit', 'source'].includes(key));
    const values = labels.map((label) => metric[label]);
    const prior = Chart.getChart(canvas);
    if (prior) prior.destroy();

    new Chart(canvas, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: metric.label,
          data: values,
          backgroundColor: [chartColors.darkOrange, chartColors.orange, chartColors.peach],
          borderRadius: 7,
          maxBarThickness: 68
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: (context) => formatValue(context.raw, metric.unit) } }
        },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(23, 34, 45, .12)' }, ticks: { callback: (value) => formatValue(value, metric.unit) } },
          x: { grid: { display: false } }
        }
      }
    });

    const source = document.querySelector(`#${metric.source}`);
    const sourceLabel = source ? source.querySelector('strong')?.textContent : 'source documentation';
    note.innerHTML = `${metric.label}, shown for the same available estimate period. <a class="source-ref" href="sources.html#${metric.source}" aria-label="Read source 1">[1]</a> <span class="chart-source">${sourceLabel || ''}</span>`;
  };

  selector.addEventListener('change', (event) => updateChart(event.target.value));
  updateChart(selector.value);
}

function createHousingChart(data) {
  const canvas = document.querySelector('#housing-chart');
  if (!canvas) return;

  new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: ['Owner-occupied', 'Renter-occupied'],
      datasets: [{ data: [data.housing.ownerOccupiedRate, data.housing.renterOccupiedRate], backgroundColor: [chartColors.darkOrange, chartColors.peach], borderColor: '#fffdf9', borderWidth: 5 }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '68%',
      plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, padding: 18 } }, tooltip: { callbacks: { label: (context) => `${context.label}: ${context.raw}%` } } }
    }
  });
}

function createWorkforceChart(data) {
  const canvas = document.querySelector('#workforce-chart');
  if (!canvas) return;

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: ['Employed', 'Unemployed'],
      datasets: [{ label: 'People (thousands)', data: [data.workforce.employedThousands, data.workforce.unemployedThousands], backgroundColor: [chartColors.orange, chartColors.darkOrange], borderRadius: 7, maxBarThickness: 90 }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: (context) => `${context.raw.toFixed(1)} thousand people` } } },
      scales: { y: { beginAtZero: true, title: { display: true, text: 'People (thousands)' }, grid: { color: 'rgba(23, 34, 45, .12)' } }, x: { grid: { display: false } } }
    }
  });
}

function fillMetrics(data) {
  document.querySelectorAll('[data-metric]').forEach((element) => {
    const [group, key] = element.dataset.metric.split('.');
    const value = data[group]?.[key];
    if (value === undefined) return;
    element.textContent = typeof value === 'number' && key.includes('Rate') ? `${value}%` : typeof value === 'number' && key.includes('Value') ? currency.format(value) : value;
  });
}

loadFindings().then((data) => {
  fillMetrics(data);
  createComparisonChart(data);
  createHousingChart(data);
  createWorkforceChart(data);
}).catch((error) => {
  const message = document.querySelector('#data-status');
  if (message) message.textContent = error.message;
  console.error(error);
});
