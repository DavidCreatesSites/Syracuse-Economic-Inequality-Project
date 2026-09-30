# Website checks — 30 September 2026

## Passed

- All JavaScript files passed Node.js syntax checks.
- The structural check passed for 10 HTML pages, 28 chart datasets, 21 source records, and 348 local links/assets.
- Every maintained dataset appears in a chart. Static table values match the interactive data, citation numbers match the catalog, local anchors exist, IDs are unique, and percentages stay within their valid range.
- Desktop browser checks: occupation measure switching, category filtering, ascending sorting, bar selection/details, expandable tables, citation opening and Escape dismissal, source filtering, and demographic measure switching.
- CSV download produced `syracuse-occupation-wages.csv`; its contents include both wage measures, units, period, geography, review status, source URL, manuscript pages, and notes.
- Corrected June workforce counts were confirmed in the rendered chart after the final BLS month-column check.
- Desktop screenshots were inspected for the page hierarchy, chart styling, navigation, labels, and unobtrusive background treatment. No horizontal overflow was observed on the tested desktop demographic page.

## Limitations

- The public CNYVitals map opened directly, but the embedded version remained blank in the in-app preview. Direct source-map links are prominent; the optional embed is collapsed by default rather than leaving a large blank area.
- The browser viewport override did not change the measured preview width. Mobile CSS is present, but phone-sized rendering was not verified by that attempted test.
- Source verification is not universal: chart review badges and the research review distinguish independently checked figures, manuscript transcriptions, and incomplete Atlas settings.
- These checks apply to the local website. No GitHub publication or live deployment was performed.
