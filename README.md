# Syracuse Economic Inequality Project

A static, GitHub Pages-ready student research website by David Duru. Open `index.html` to start; no build step or paid service is required.

## Current contents

The Education, Employment, Neighborhood Conditions, and Racial Statistics pages contain 28 interactive charts, source-linked explanations, downloadable datasets, and accessible data tables. Neighborhood Conditions also embeds two CNYVitals map layers. Questions introduces the research agenda; Sources contains grouped MLA-style citations, methods, and correction notes.

Not every manuscript claim has been independently verified. Each chart labels its review status. Read [the complete 37-page review](docs/research-review.md) before interpreting or updating the data.

## Editing guide

- `index.html`: Project Details landing page.
- `questions.html` and the four topic HTML files: page text, section links, and static chart tables.
- `sources.html`: source directory and methods.
- `assets/js/research-data.js`: maintained chart values and provenance.
- `assets/js/source-catalog.js`: numbered MLA-style citations used in citation pop-ups.
- `assets/js/research-charts.js`: filters, measure selectors, sorting, CSV exports, and map switching.
- `assets/js/citations.js`: accessible citation dialog.
- `assets/css/styles.css`: shared theme and subtle backgrounds.
- `assets/css/research.css`: topic layouts, charts, tables, and responsive styles.
- `data/review/`: public source exports retained for auditing.
- `docs/research-review.md`: page-by-page coverage, corrections, limitations, and maintenance notes.

When changing a statistic, update its dataset, static HTML table, explanation, and source details together. The Sources directory and citation catalog should remain synchronized. Older `data/processed/` files and earlier chart scripts are retained as historical artifacts and are not the maintained data for the current topic pages.

## Local checks

Run `node scripts/check-site.cjs` if Node.js is installed. Open the site in a browser to check layout and interactions. Charts and citations work from local files; map embeds need internet access.

## Publishing later

Upload the complete project to your GitHub repository, then enable GitHub Pages for the branch and root folder containing `index.html`. All links are relative, so the site supports repository-based Pages URLs. Editing local files does not automatically publish changes to GitHub.
