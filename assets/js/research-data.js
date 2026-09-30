// Reviewed research data. Source numbers match the Sources page.
window.RESEARCH_DATA = {
  "poverty": {
    "id": "poverty",
    "title": "Poverty rate and child poverty",
    "unit": "percent",
    "source": 2,
    "period": "2020–2024 ACS 5-year estimates",
    "geography": "Syracuse city",
    "pages": "6, 30",
    "columns": [
      [
        "rate",
        "Below the poverty line"
      ]
    ],
    "rows": [
      [
        "All residents with poverty status determined",
        28.8
      ],
      [
        "Children under age 18",
        44
      ]
    ],
    "note": "Different populations: 129,544 residents overall; 29,386 children. Estimates exclude people for whom poverty status is not determined. The paper reports 37,289 residents and 12,918 children below poverty. Margins of error were not retained.",
    "status": "Paper transcription"
  },
  "attainment": {
    "id": "attainment",
    "title": "Poverty by educational attainment",
    "unit": "percent",
    "source": 2,
    "period": "2020–2024 ACS 5-year estimates",
    "geography": "Syracuse city",
    "pages": "7, 31",
    "columns": [
      [
        "rate",
        "Below the poverty line"
      ]
    ],
    "rows": [
      [
        "Less than a high school diploma",
        47.2
      ],
      [
        "High school graduate or equivalent",
        27.4
      ],
      [
        "Some college or an associate’s degree",
        18.3
      ],
      [
        "Bachelor’s degree or higher",
        10.8
      ]
    ],
    "note": "Population age 25 and older with poverty status determined. The 18.3% category includes some college; it is not limited to associate’s degrees. This is an association, not an estimate of a degree’s causal effect.",
    "status": "Paper transcription"
  },
  "school-economic": {
    "id": "school-economic",
    "title": "Third-grade proficiency by economic disadvantage",
    "unit": "percent",
    "source": 10,
    "period": "2025",
    "geography": "Syracuse City School District",
    "pages": "14, 33",
    "columns": [
      [
        "ela",
        "English language arts"
      ],
      [
        "math",
        "Mathematics"
      ]
    ],
    "rows": [
      [
        "Economically disadvantaged",
        22.6,
        24.5
      ],
      [
        "Not economically disadvantaged",
        65.1,
        63.4
      ]
    ],
    "note": "Percent proficient (performance levels 3–4). Downloaded from CNYVitals on 29 September 2026 and rounded to one decimal. Group sizes and other differences matter when interpreting the gaps.",
    "status": "Source checked"
  },
  "school-race": {
    "id": "school-race",
    "title": "Third-grade proficiency by reported race and ethnicity",
    "unit": "percent",
    "source": 10,
    "period": "2025",
    "geography": "Syracuse City School District",
    "pages": "14–15",
    "columns": [
      [
        "ela",
        "English language arts"
      ],
      [
        "math",
        "Mathematics"
      ]
    ],
    "rows": [
      [
        "American Indian or Alaska Native",
        41.7,
        33.3
      ],
      [
        "Black or African American",
        24,
        22.5
      ],
      [
        "Hispanic or Latino",
        17.3,
        23.6
      ],
      [
        "Asian or Native Hawaiian / Other Pacific Islander",
        22,
        31.3
      ],
      [
        "White",
        40.7,
        44.4
      ],
      [
        "Multiracial",
        30.4,
        33.6
      ]
    ],
    "note": "Source grouping is retained. Small groups may have unstable percentages. The export reports 41.7% in ELA for American Indian or Alaska Native students, correcting the paper’s 45%. These measures describe test performance, not students’ potential.",
    "status": "Source checked"
  },
  "graduation": {
    "id": "graduation",
    "title": "Graduation: the district’s reported 2025 cohort",
    "unit": "percent",
    "source": 11,
    "period": "2025",
    "geography": "Syracuse City School District",
    "pages": "14, 32",
    "columns": [
      [
        "share",
        "Share of reported enrollment"
      ]
    ],
    "rows": [
      [
        "Graduates",
        66.45
      ],
      [
        "Not recorded as graduates in this measure",
        33.55
      ]
    ],
    "note": "Calculated as 901 graduates ÷ 1,356 enrolled × 100. The complement includes all other outcomes; it is not a dropout rate. CNYVitals’ export does not document the cohort duration. The paper’s county comparison (83.65%) is retained in the review notes pending a matching cohort definition.",
    "status": "Source checked"
  },
  "internet": {
    "id": "internet",
    "title": "Households without an internet subscription",
    "unit": "percent",
    "source": 9,
    "period": "2020–2024 ACS 5-year estimates",
    "geography": "Syracuse city",
    "pages": "7–8",
    "columns": [
      [
        "rate",
        "Without a subscription"
      ]
    ],
    "rows": [
      [
        "Household income below $20,000",
        24.6
      ],
      [
        "Household income $20,000–$74,999",
        10.2
      ]
    ],
    "note": "Income-group denominators are 14,292 and 26,106 households, respectively. The paper reports 88.2% of all households with any internet subscription; QuickFacts’ 88.1% measures broadband, a different indicator.",
    "status": "Paper transcription"
  },
  "income": {
    "id": "income",
    "title": "Household income distribution",
    "unit": "percent",
    "source": 3,
    "period": "2020–2024 ACS 5-year estimates",
    "geography": "Syracuse city",
    "pages": "4–5, 11, 31",
    "columns": [
      [
        "share",
        "Share of households"
      ]
    ],
    "rows": [
      [
        "Below $10,000",
        11.4
      ],
      [
        "$10,000–$14,999",
        6.7
      ],
      [
        "$15,000–$24,999",
        11.5
      ],
      [
        "$25,000–$34,999",
        9.6
      ],
      [
        "$35,000–$49,999",
        12.3
      ],
      [
        "$50,000–$74,999",
        16
      ],
      [
        "$75,000–$99,999",
        11.4
      ],
      [
        "$100,000–$149,999",
        12.2
      ],
      [
        "$150,000–$199,999",
        4.8
      ],
      [
        "$200,000 or more",
        4
      ]
    ],
    "note": "59,816 households. Percentages total 99.9% because of rounding. Bracket counts in the early draft contain a transcription inconsistency, so this chart uses the consistent percentage distribution on page 11. Income brackets do not measure wealth or each group’s share of all income.",
    "status": "Paper transcription"
  },
  "income-center": {
    "id": "income-center",
    "title": "Median and mean household income",
    "unit": "dollars",
    "source": 3,
    "period": "2020–2024 ACS 5-year estimates",
    "geography": "Syracuse city",
    "pages": "11, 30–31",
    "columns": [
      [
        "income",
        "Household income"
      ]
    ],
    "rows": [
      [
        "Median (middle household)",
        47819
      ],
      [
        "Mean (arithmetic average)",
        67230
      ]
    ],
    "note": "Amounts are in 2024 inflation-adjusted dollars. The median splits households into two equal halves; the mean is total household income divided by the number of households. A higher mean suggests the upper end pulls up the average.",
    "status": "Paper transcription"
  },
  "work-poverty": {
    "id": "work-poverty",
    "title": "Poverty by work experience",
    "unit": "percent",
    "source": 2,
    "period": "2020–2024 ACS 5-year estimates",
    "geography": "Syracuse city",
    "pages": "6–7, 31",
    "columns": [
      [
        "rate",
        "Below the poverty line"
      ]
    ],
    "rows": [
      [
        "Worked full time, year-round",
        3.7
      ],
      [
        "Worked part time or part year",
        29.5
      ],
      [
        "Did not work",
        43.6
      ]
    ],
    "note": "Residents age 16 and older with poverty status determined. Work experience refers to the past 12 months. Household composition and other circumstances also affect poverty status.",
    "status": "Paper transcription"
  },
  "occupation-mix": {
    "id": "occupation-mix",
    "title": "Occupations held by employed city residents",
    "unit": "percent",
    "source": 8,
    "period": "2020–2024 ACS 5-year estimates",
    "geography": "Syracuse city",
    "pages": "5",
    "columns": [
      [
        "share",
        "Share of civilian employed residents"
      ]
    ],
    "rows": [
      [
        "Management, business, science, and arts",
        41.3
      ],
      [
        "Service",
        22.3
      ],
      [
        "Sales and office",
        18.8
      ],
      [
        "Natural resources, construction, and maintenance",
        4
      ],
      [
        "Production, transportation, and material moving",
        13.6
      ]
    ],
    "note": "62,634 civilian employed residents age 16 and older. The draft’s 119,578 is the population age 16 and older, not the number employed. These are residents’ occupations, not a count of jobs located inside city boundaries.",
    "status": "Paper transcription"
  },
  "metro-workforce": {
    "id": "metro-workforce",
    "title": "Metro labor force: employment and unemployment",
    "unit": "number",
    "source": 5,
    "period": "June 2026",
    "geography": "Syracuse metropolitan area",
    "pages": "21, 34",
    "columns": [
      [
        "people",
        "People"
      ]
    ],
    "rows": [
      [
        "Employed",
        306400
      ],
      [
        "Unemployed",
        12500
      ]
    ],
    "note": "Not seasonally adjusted. BLS reports a labor force of 318,900 and an unemployment rate of 3.9%. The June column was checked on 30 September 2026; the draft’s counts correspond to May. This monthly metro rate is not directly comparable with the city’s ACS multiyear rate.",
    "status": "Source checked"
  },
  "industry": {
    "id": "industry",
    "title": "Employment by industry",
    "unit": "number",
    "source": 5,
    "period": "June 2026 · revised September 2026 release",
    "geography": "Syracuse metropolitan area",
    "pages": "21–22, 34",
    "columns": [
      [
        "jobs",
        "Payroll jobs"
      ]
    ],
    "rows": [
      [
        "Mining, logging, and construction",
        13700
      ],
      [
        "Manufacturing",
        25500
      ],
      [
        "Trade, transportation, and utilities",
        60800
      ],
      [
        "Information",
        2700
      ],
      [
        "Financial activities",
        13200
      ],
      [
        "Professional and business services",
        41800
      ],
      [
        "Education and health services",
        63600
      ],
      [
        "Leisure and hospitality",
        28900
      ],
      [
        "Other services",
        11600
      ],
      [
        "Government",
        63100
      ]
    ],
    "note": "Not seasonally adjusted. Values use the revised BLS June column, totaling 324,900 jobs. Several differ from the paper’s August extraction. Jobs are not unique workers or unfilled vacancies. BLS reports 12-month changes, not year-to-date changes.",
    "status": "Source checked"
  },
  "wage-percentiles": {
    "id": "wage-percentiles",
    "title": "The wage distribution",
    "unit": "dollars",
    "source": 18,
    "period": "May 2025 OEWS",
    "geography": "Syracuse metropolitan area",
    "pages": "24, 34",
    "columns": [
      [
        "wage",
        "Annual wage"
      ]
    ],
    "rows": [
      [
        "10th percentile",
        34290
      ],
      [
        "25th percentile",
        38760
      ],
      [
        "Median (50th percentile)",
        52990
      ],
      [
        "75th percentile",
        79140
      ],
      [
        "90th percentile",
        112260
      ]
    ],
    "note": "The 90th-percentile wage is 3.27 times the 10th-percentile wage. The mean is $67,470, not the median. This ratio compares two wage thresholds; it does not compare the total incomes of the richest and poorest groups. OEWS excludes self-employed workers.",
    "status": "Source checked"
  },
  "occupation-wages": {
    "id": "occupation-wages",
    "title": "Wages across selected occupations",
    "unit": "dollars",
    "source": 18,
    "period": "May 2025 OEWS",
    "geography": "Syracuse metropolitan area",
    "pages": "22–26, 34–35",
    "columns": [
      [
        "median",
        "Median annual wage"
      ],
      [
        "mean",
        "Mean annual wage"
      ]
    ],
    "rows": [
      [
        "Chief executives",
        216610,
        304140
      ],
      [
        "Financial managers",
        169270,
        185530
      ],
      [
        "Construction managers",
        132760,
        141660
      ],
      [
        "Education administrators, K–12",
        110010,
        117270
      ],
      [
        "Computer systems analysts",
        95380,
        99000
      ],
      [
        "Software developers",
        129100,
        130980
      ],
      [
        "Lawyers",
        128910,
        156340
      ],
      [
        "Registered nurses",
        86960,
        89850
      ],
      [
        "Home health and personal care aides",
        37440,
        39870
      ],
      [
        "Fast food and counter workers",
        33940,
        34880
      ],
      [
        "Janitors and cleaners",
        38230,
        40900
      ],
      [
        "Cashiers",
        33950,
        34700
      ],
      [
        "Retail salespersons",
        35250,
        39480
      ]
    ],
    "note": "Select median or mean to compare like with like. The paper’s occupation figures match annual means. For most occupations, BLS annualizes hourly wages using 2,080 hours; actual annual earnings depend on hours worked.",
    "status": "Source checked"
  },
  "occupation-employment": {
    "id": "occupation-employment",
    "title": "Employment in selected occupations",
    "unit": "number",
    "source": 18,
    "period": "May 2025 OEWS",
    "geography": "Syracuse metropolitan area",
    "pages": "24–26",
    "columns": [
      [
        "jobs",
        "Estimated employment"
      ]
    ],
    "rows": [
      [
        "Chief executives",
        240
      ],
      [
        "Financial managers",
        1220
      ],
      [
        "Construction managers",
        320
      ],
      [
        "Education administrators, K–12",
        760
      ],
      [
        "Computer systems analysts",
        650
      ],
      [
        "Software developers",
        2180
      ],
      [
        "Lawyers",
        1190
      ],
      [
        "Registered nurses",
        8180
      ],
      [
        "Home health and personal care aides",
        8310
      ],
      [
        "Fast food and counter workers",
        6750
      ],
      [
        "Janitors and cleaners",
        6010
      ],
      [
        "Cashiers",
        6140
      ],
      [
        "Retail salespersons",
        8150
      ]
    ],
    "note": "Selected occupations are not the whole workforce. Home health and personal care aides account for about 2.77% of the 300,130 jobs covered by OEWS, not 27.7%. The original draft confused jobs per 1,000 with percentages.",
    "status": "Source checked"
  },
  "rent-burden": {
    "id": "rent-burden",
    "title": "Gross rent as a share of household income",
    "unit": "percent",
    "source": 4,
    "period": "2020–2024 ACS 5-year estimates",
    "geography": "Syracuse city",
    "pages": "10, 32",
    "columns": [
      [
        "share",
        "Share of households with a computed rent-to-income ratio"
      ]
    ],
    "rows": [
      [
        "Less than 15%",
        12.7
      ],
      [
        "15%–19.9%",
        12.6
      ],
      [
        "20%–24.9%",
        9.8
      ],
      [
        "25%–29.9%",
        9.6
      ],
      [
        "30%–34.9%",
        9.3
      ],
      [
        "35% or more",
        46
      ]
    ],
    "note": "32,700 renter households with a computed ratio. The last two categories total 55.3% spending at least 30% of income on gross rent. The 46.0% figure is not the share spending at least 50%. Gross rent includes contract rent and applicable utility costs.",
    "status": "Paper transcription"
  },
  "tenure": {
    "id": "tenure",
    "title": "Homeownership and rental housing",
    "unit": "number",
    "source": 4,
    "period": "2020–2024 ACS 5-year estimates",
    "geography": "Syracuse city",
    "pages": "9–10, 15, 32",
    "columns": [
      [
        "units",
        "Occupied housing units"
      ]
    ],
    "rows": [
      [
        "Owner-occupied",
        24889
      ],
      [
        "Renter-occupied",
        34927
      ]
    ],
    "note": "59,816 occupied units. Owners account for 41.6% and renters for 58.4%. The draft’s 34,001 is the number of renter units paying cash rent, not all renter units. Counts were checked against CNYVitals and the QuickFacts ownership share.",
    "status": "Source checked"
  },
  "occupancy": {
    "id": "occupancy",
    "title": "Occupied and vacant housing",
    "unit": "number",
    "source": 4,
    "period": "2020–2024 ACS 5-year estimates",
    "geography": "Syracuse city",
    "pages": "9, 15",
    "columns": [
      [
        "units",
        "Housing units"
      ]
    ],
    "rows": [
      [
        "Occupied",
        59816
      ],
      [
        "Vacant",
        7785
      ]
    ],
    "note": "67,601 housing units; approximately 11.5% vacant. This overall vacancy share is different from the homeowner vacancy rate (2.1%) and rental vacancy rate (5.0%) reported in the paper.",
    "status": "Source checked"
  },
  "gross-rent": {
    "id": "gross-rent",
    "title": "Monthly gross rent",
    "unit": "percent",
    "source": 4,
    "period": "2020–2024 ACS 5-year estimates",
    "geography": "Syracuse city",
    "pages": "9",
    "columns": [
      [
        "share",
        "Share of renter households paying cash rent"
      ]
    ],
    "rows": [
      [
        "Below $500",
        10.9
      ],
      [
        "$500–$999",
        35.2
      ],
      [
        "$1,000–$1,499",
        36.3
      ],
      [
        "$1,500–$1,999",
        11.9
      ],
      [
        "$2,000–$2,499",
        3.1
      ],
      [
        "$2,500–$2,999",
        1.1
      ],
      [
        "$3,000 or more",
        1.4
      ]
    ],
    "note": "34,001 renter households paying cash rent. Median gross rent: $1,039 per month. Rounded percentages may not total 100%. A citywide median is not the rent of every household.",
    "status": "Paper transcription"
  },
  "home-values": {
    "id": "home-values",
    "title": "Value of owner-occupied homes",
    "unit": "percent",
    "source": 4,
    "period": "2020–2024 ACS 5-year estimates",
    "geography": "Syracuse city",
    "pages": "10, 32",
    "columns": [
      [
        "share",
        "Share of owner-occupied units"
      ]
    ],
    "rows": [
      [
        "Below $50,000",
        5.6
      ],
      [
        "$50,000–$99,999",
        26.4
      ],
      [
        "$100,000–$149,999",
        23.1
      ],
      [
        "$150,000–$199,999",
        20.9
      ],
      [
        "$200,000–$299,999",
        14.7
      ],
      [
        "$300,000–$499,999",
        6.5
      ],
      [
        "$500,000–$999,999",
        2.1
      ],
      [
        "$1 million or more",
        0.7
      ]
    ],
    "note": "24,889 owner-occupied units. Median value: $138,400. This is an estimate of owner-reported housing value, not a median sale price or a measure of owners’ net equity.",
    "status": "Paper transcription"
  },
  "owner-costs": {
    "id": "owner-costs",
    "title": "Monthly owner costs by mortgage status",
    "unit": "number",
    "source": 4,
    "period": "2020–2024 ACS 5-year estimates",
    "geography": "Syracuse city",
    "pages": "8–9",
    "columns": [
      [
        "mortgage",
        "With a mortgage"
      ],
      [
        "noMortgage",
        "Without a mortgage"
      ]
    ],
    "rows": [
      [
        "Below $1,000",
        4098,
        8960
      ],
      [
        "$1,000 or more",
        10930,
        901
      ]
    ],
    "note": "Grouped from the paper’s finer cost brackets: 15,028 owners with a mortgage and 9,861 without. Owner costs are not gross rent; these measures cover different households and different expenses.",
    "status": "Paper transcription"
  },
  "race-poverty": {
    "id": "race-poverty",
    "title": "Poverty rates by race and Hispanic origin",
    "unit": "percent",
    "source": 2,
    "period": "2020–2024 ACS 5-year estimates",
    "geography": "Syracuse city",
    "pages": "6, 33",
    "columns": [
      [
        "rate",
        "Below the poverty line"
      ]
    ],
    "rows": [
      [
        "White alone, not Hispanic or Latino",
        20.5
      ],
      [
        "Black or African American alone",
        37.3
      ],
      [
        "Hispanic or Latino, any race",
        44.7
      ],
      [
        "Asian alone",
        27
      ]
    ],
    "note": "The White estimate applies specifically to non-Hispanic White residents. Hispanic origin is separate from race; categories can overlap and must not be added. Rates use each group’s population with poverty status determined.",
    "status": "Paper transcription"
  },
  "race-income": {
    "id": "race-income",
    "title": "Per-capita income by reported group",
    "unit": "dollars",
    "source": 12,
    "period": "2024 ACS 5-year release via CNYVitals",
    "geography": "Syracuse city",
    "pages": "16, 33",
    "columns": [
      [
        "income",
        "Per-capita income"
      ]
    ],
    "rows": [
      [
        "White",
        36504
      ],
      [
        "Black",
        20089
      ],
      [
        "American Indian or Alaska Native",
        19342
      ],
      [
        "Asian",
        21554
      ],
      [
        "Hispanic or Latino",
        17892
      ]
    ],
    "note": "Per-capita income is an average per person, not a median wage or household income. CNYVitals labels are retained. The paper’s 2014-to-2024 nominal dollar changes are not presented as inflation-adjusted gains.",
    "status": "Paper transcription"
  },
  "race-unemployment": {
    "id": "race-unemployment",
    "title": "Unemployment and labor-force participation by group",
    "unit": "percent",
    "source": 13,
    "period": "2024 ACS 5-year release via CNYVitals",
    "geography": "Syracuse city",
    "pages": "15",
    "columns": [
      [
        "unemployment",
        "Unemployment rate"
      ],
      [
        "participation",
        "Labor-force participation"
      ]
    ],
    "rows": [
      [
        "White",
        6,
        55.1
      ],
      [
        "Black",
        11.7,
        59.8
      ],
      [
        "American Indian or Alaska Native",
        5.5,
        54.7
      ],
      [
        "Asian",
        6.5,
        55.8
      ],
      [
        "Hispanic or Latino",
        9.7,
        59.6
      ]
    ],
    "note": "Unemployment is a share of the civilian labor force; participation is a share of the relevant working-age population. The two percentages have different denominators. These are paper transcriptions; historical endpoints require further checking.",
    "status": "Paper transcription"
  },
  "poverty-counts": {
    "id": "poverty-counts",
    "title": "Residents below poverty: two reported endpoints",
    "unit": "number",
    "source": 14,
    "period": "2014 and 2024 ACS 5-year releases via CNYVitals",
    "geography": "Syracuse city",
    "pages": "17–18",
    "columns": [
      [
        "2014",
        "2014"
      ],
      [
        "2024",
        "2024"
      ]
    ],
    "rows": [
      [
        "White",
        18087,
        13284
      ],
      [
        "Black",
        17890,
        14318
      ],
      [
        "American Indian or Alaska Native",
        601,
        442
      ],
      [
        "Asian",
        3273,
        2235
      ],
      [
        "Multiracial",
        3508,
        5208
      ],
      [
        "Hispanic or Latino",
        6039,
        6136
      ],
      [
        "White, not Hispanic or Latino",
        15716,
        12431
      ]
    ],
    "note": "Counts are not poverty rates. Population changes and changes in racial identification affect comparisons. Groups overlap: do not total the rows. Only the two endpoints recorded in the paper are shown.",
    "status": "Paper transcription"
  },
  "lead": {
    "id": "lead",
    "title": "Elevated blood lead levels in selected census tracts",
    "unit": "percent",
    "source": 15,
    "period": "2025",
    "geography": "Syracuse city",
    "pages": "18, 36",
    "columns": [
      [
        "rate",
        "Children with elevated blood lead levels"
      ]
    ],
    "rows": [
      [
        "Census tract 6",
        16.9
      ],
      [
        "Census tract 14",
        19.7
      ],
      [
        "Census tract 39",
        11.2
      ]
    ],
    "note": "CNYVitals uses a threshold of 5 µg/dL or higher for this indicator. Selected tracts are those discussed in the paper, not a complete ranking. The city figure on the source profile is 9.05%; the export does not include the tested-child denominator.",
    "status": "Source checked"
  },
  "atlas-household": {
    "id": "atlas-household",
    "title": "Household income in adulthood: ranges noted in the paper",
    "unit": "dollars",
    "source": 7,
    "period": "Exploratory Atlas observations · settings not recorded",
    "geography": "Broad Syracuse areas, not official statistical boundaries",
    "pages": "28, 35",
    "columns": [
      [
        "low",
        "Lower endpoint"
      ],
      [
        "high",
        "Upper endpoint"
      ]
    ],
    "rows": [
      [
        "Westside",
        26000,
        44000
      ],
      [
        "Southside",
        19000,
        30000
      ],
      [
        "Downtown (approximate point)",
        29000,
        29000
      ],
      [
        "Northside / Destiny area",
        28000,
        36000
      ],
      [
        "Syracuse University area",
        35000,
        57000
      ]
    ],
    "note": "Exploratory only. Parent-income filter, race, gender, cohort, dollar year, and tract list were not recorded. These are observed ranges, not area averages, current residents’ earnings, or verified neighborhood rankings. Do not use them to color a geographic map.",
    "status": "Settings incomplete"
  },
  "atlas-individual": {
    "id": "atlas-individual",
    "title": "Individual income in adulthood: ranges noted in the paper",
    "unit": "dollars",
    "source": 7,
    "period": "Exploratory Atlas observations · settings not recorded",
    "geography": "Broad Syracuse areas, not official statistical boundaries",
    "pages": "28, 35–36",
    "columns": [
      [
        "low",
        "Lower endpoint"
      ],
      [
        "high",
        "Upper endpoint"
      ]
    ],
    "rows": [
      [
        "Westside",
        15000,
        25000
      ],
      [
        "Southside",
        15000,
        27000
      ],
      [
        "Eastside",
        20000,
        35000
      ],
      [
        "Destiny area (approximate point)",
        27000,
        27000
      ]
    ],
    "note": "The Atlas follows people by where they grew up, even if they later moved. These figures cannot establish that nearby employers caused the observed outcomes. Reproduce the filters before treating the ranges as a verified comparison.",
    "status": "Settings incomplete"
  }
};
