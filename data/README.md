# Data directory

This directory contains public source exports and historical development datasets.

When research begins, retain original downloaded files outside the published site when licensing or file size requires it. Store only the cleaned, public, documented datasets needed by the website here. Each published dataset should have a clear source, geography, release period, retrieval date, variable definitions, and transformation notes.

- `review/` contains CNYVitals CSV exports for school scores, graduation, and lead, retrieved on 29 September 2026.
- `processed/` contains earlier development datasets retained for recovery. These are not loaded by the current topic pages and should not be treated as the maintained source of truth.
- The current chart datasets and provenance are in `../assets/js/research-data.js`. See `../docs/research-review.md` for corrections and limitations.
- Maps currently embed CNYVitals’ official views. No invented geographic boundaries or tract estimates are stored here.
