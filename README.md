# SEBI Kft. – weboldal (demó)

Modern, statikus bemutató weboldal a [SEBI Kft.](https://sebikft.hu/) számára, [Astro](https://astro.build) alapon.

## Fejlesztés

```sh
npm install
npm run dev      # http://localhost:4321/sebi/
npm run build    # statikus oldal a dist/ mappába
```

## Tartalom

- Cégadatok: `src/data/company.ts`
- Géppark: `src/data/machines.ts`
- Oldalak: `src/pages/` (kezdőlap, `palyazat`, `adatvedelem`)
- Képek: `src/assets/` (automatikusan WebP-re optimalizálva)

## Közzététel

A `main` ágra kerülő változásokat a `.github/workflows/deploy.yml` GitHub Pages-re telepíti
(Settings → Pages → Source: GitHub Actions). Saját domainnél (sebikft.hu) a buildet `BASE=/ SITE=https://sebikft.hu` környezeti változókkal kell futtatni.
