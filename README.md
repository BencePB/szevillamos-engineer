# szevillamos.engineer

Nem hivatalos hallgatói oldal villamosmérnöki jegyzetek, prezentációk és
tananyagok megosztására. A tartalomért kizárólag a szerző felel, az oldal
nem áll kapcsolatban a Széchenyi István Egyetemmel.

## Új anyag feltöltése

1. Töltsd le a fájlt a Moodle-ról.
2. Másold a fájlt a `files/` mappába (a fájlnév legyen beszédes, pl.
   `villamossagtan_02_jegyzet.pdf`).
3. Nyisd meg az `assets/materials.json` fájlt, és adj hozzá egy új elemet:

```json
{
  "title": "Cím",
  "subject": "Tárgy neve",
  "type": "jegyzet | prezentáció | vizsgaanyag",
  "semester": "2026/27 ősz",
  "desc": "Rövid leírás.",
  "file": "files/fajlnev.pdf"
}
```

4. Commitold és pusholdd `main`-re &mdash; a GitHub Pages build automatikusan
   frissül pár perc múlva.

## Szerkezet

- `index.html` &mdash; kezdőlap
- `jegyzetek.html` &mdash; kereshető anyaglista
- `assets/materials.json` &mdash; az anyagok adatbázisa
- `assets/app.js` &mdash; kereső/szűrő logika
- `assets/style.css` &mdash; kinézet
- `files/` &mdash; a tényleges letölthető fájlok
