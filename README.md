# Thermo Nord

Site web officiel de **Thermo Nord** — Chauffagiste à Villeneuve-Saint-Georges
(94, Val-de-Marne, Île-de-France). Installation, entretien et dépannage de
chaudières, pompes à chaleur et climatisations.

> **À noter** : malgré son nom, Thermo Nord est implantée dans le **nord du
> Val-de-Marne** (94) et intervient dans le sud-est de l'Île-de-France, et
> **non** dans le département du Nord (59).

## Stack technique

- **[Next.js 16](https://nextjs.org/)** — App Router, Server Components, Turbopack
- **TypeScript** strict
- **[Tailwind CSS 4](https://tailwindcss.com/)** (config CSS-first)
- **ESLint** (`eslint-config-next`)
- **Node.js** ≥ 20

## Démarrage

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
# → http://localhost:3000

# Build de production
npm run build
npm start

# Linter
npm run lint
```

> Sur Windows, si `npm` n'est pas reconnu : Node.js est installé dans
> `C:\Program Files\nodejs`. Ajoute ce chemin à ton PATH système ou utilise
> `& "C:\Program Files\nodejs\npm.cmd"`.

## Structure du projet

```
.
├── .cursor/
│   ├── mcp.json                 # MCP : Playwright, Context7, GitHub
│   └── rules/
│       └── seo-geo.mdc          # Règles SEO + GEO appliquées en permanence
├── public/
│   └── llms.txt                 # Description du site pour les LLM (GEO)
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Layout racine + métadonnées globales
│   │   ├── page.tsx             # Page d'accueil
│   │   ├── sitemap.ts           # Génération sitemap.xml
│   │   ├── robots.ts            # Génération robots.txt (autorise les bots IA)
│   │   └── globals.css          # Tailwind + styles globaux
│   ├── components/
│   │   └── JsonLd.tsx           # Composant d'injection Schema.org JSON-LD
│   └── lib/
│       ├── site.ts              # Configuration centrale (URL, contact, etc.)
│       └── seo.ts               # Helpers SEO : metadata, JSON-LD
├── next.config.ts               # Config Next.js (images, headers de sécurité)
└── package.json
```

## Conventions SEO + GEO

Toutes les règles sont définies dans `.cursor/rules/seo-geo.mdc` et appliquées
automatiquement par l'agent Cursor à chaque modification.

**À retenir** :

1. Site **en français** (`<html lang="fr">`).
2. **Une seule `<h1>`** par page, hiérarchie `h2` → `h3` cohérente.
3. **Métadonnées via `buildMetadata()`** sur chaque page (helper dans `src/lib/seo.ts`).
4. **JSON-LD obligatoire** : `Organization` + `WebSite` au layout, `BreadcrumbList`
   + un type spécifique (`Article`, `Service`, `FAQPage`…) sur chaque page.
5. **Réponse directe en haut de page** (résumé en 2-3 phrases) pour le GEO.
6. **Sources externes** citées explicitement (ADEME, normes) pour être cité par les LLM.
7. **Bots IA autorisés** dans `robots.ts` (GPTBot, PerplexityBot, ClaudeBot, etc.).
8. **`public/llms.txt`** maintenu à jour à chaque ajout de page importante.

## Avant la mise en production

Mettre à jour les valeurs réelles dans :

- [ ] `src/lib/site.ts` — **téléphone** (placeholder à remplacer), email pro,
      coordonnées GPS exactes, comptes réseaux sociaux
- [ ] `src/lib/site.ts` — domaine définitif (`thermo-nord.fr` est utilisé par
      défaut, à confirmer)
- [ ] `public/og-default.png` — image OpenGraph 1200×630 (à créer)
- [ ] `public/favicon.ico` + `public/logo.png`
- [ ] `.cursor/mcp.json` — token GitHub à remplacer

### Données légales déjà renseignées

- **Dirigeant** : Rida Aachchiou
- **SIRET** : 81136216900039
- **TVA** : FR 44 811362169
- **NAF** : 43.22H — Travaux d'installation d'équipements thermiques et de climatisation
- **Adresse** : 6 rue Léon Blum, 94190 Villeneuve-Saint-Georges
- **Date de création** : 30/04/2015

## MCP configurés

| MCP | Utilité |
|---|---|
| **Playwright** | Tester le rendu réel des pages (ce que voit Googlebot) |
| **Context7** | Documentation à jour des libs (Next, React, Tailwind…) |
| **GitHub** | Gestion des issues, PRs, branches |

## Déploiement

Le projet est prêt pour **Vercel** (déploiement zero-config). Penser à :

1. Connecter le dépôt GitHub sur [vercel.com](https://vercel.com)
2. Configurer le domaine `thermo-nord.fr`
3. Activer la **Web Analytics** Vercel pour les Core Web Vitals
