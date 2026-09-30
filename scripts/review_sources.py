"""Download public source tables for a reproducible research review.

Run explicitly; never runs in visitors' browsers. Raw downloads and filtered
records are generated artifacts, not manually edited research values.
"""
import csv
import io
import json
from pathlib import Path
import urllib.request
import urllib.parse
import zipfile

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'data' / 'review'
OUT.mkdir(parents=True, exist_ok=True)

def fetch(url):
    request = urllib.request.Request(urllib.parse.quote(url, safe=':/?&=,%[]'), headers={'User-Agent': 'SyracuseStudentResearch/1.0'})
    return urllib.request.urlopen(request, timeout=60).read()

sources = {
    'school-economic': 'https://cny.api.datawheel.us/tesseract/cubes/Test Scores/aggregate.csv?drilldowns[]=[Subgroup].[Economic].[Economic]&drilldowns[]=Test.Test.Test&drilldowns[]=[School Geography].[School District].[School District]&drilldowns[]=Year.Year.Year&measures[]=Percent Proficient&cuts[]=[School Geography].[School District].[School District].[97000US3628590]',
    'lead': 'https://cny.api.datawheel.us/tesseract/data.csv?cube=Lead&drilldowns=Year,Tract&measures=Lead Value',
    'school-race': 'https://cny.api.datawheel.us/tesseract/cubes/Test Scores/aggregate.csv?drilldowns[]=[Subgroup].[Race].[Race]&drilldowns[]=Test.Test.Test&drilldowns[]=[School Geography].[School District].[School District]&drilldowns[]=Year.Year.Year&measures[]=Percent Proficient&cuts[]=[School Geography].[School District].[School District].[97000US3628590]',
    'graduation': 'https://cny.api.datawheel.us/tesseract/cubes/Graduation/aggregate.csv?drilldowns[]=[School Geography].[School District].[School District]&drilldowns[]=Year.Year.Year&measures[]=Enrolled&measures[]=Graduates&cuts[]=[School Geography].[School District].[School District].[97000US3628590]',
}

for name, url in sources.items():
    try:
        raw = fetch(url)
        (OUT / (name + '.csv')).write_bytes(raw)
        rows = list(csv.DictReader(io.StringIO(raw.decode('utf-8-sig'))))
        chosen = [r for r in rows if r.get('Year') in ('2024', '2025')]
        if name == 'lead':
            chosen = [r for r in chosen if r.get('Tract') in ('Census Tract 6','Census Tract 14','Census Tract 39')]
        print(name, 'fields:', list(rows[0]) if rows else [], 'recent rows:', json.dumps(chosen, ensure_ascii=False))
    except Exception as error:
        print(name, 'ERROR', str(error))

try:
    import openpyxl
    archive = zipfile.ZipFile(io.BytesIO(fetch('https://www.bls.gov/oes/special-requests/oesm25ma.zip')))
    name = next(n for n in archive.namelist() if n.endswith('.xlsx'))
    workbook = openpyxl.load_workbook(io.BytesIO(archive.read(name)), read_only=True, data_only=True)
    rows = iter(workbook.active.values)
    headers = next(rows)
    records = [dict(zip(headers, row)) for row in rows if any(str(v) == '45060' for v in row[:4])]
    (OUT / 'bls-syracuse-2025.json').write_text(json.dumps(records, indent=2), encoding='utf-8')
    selected = {'00-0000','11-1011','11-3031','11-9021','11-9032','13-2011','15-1211','15-1252','23-1011','29-1141','31-1120','35-3023','41-2011','37-2011','41-2031'}
    print('BLS',json.dumps([r for r in records if r.get('OCC_CODE') in selected]))
except Exception as error:
    print('BLS ERROR', str(error))
