# Portfolio — editorial software engineer

Single-page portfolio in five movements: Hero, Work, About, Skills, Experience, Contact.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build it

```bash
npm run build    # outputs to ./dist
npm run preview  # serve the build locally
```

## Personalising

All copy lives at the top of `src/App.tsx` in five `const` blocks:

- `PROFILE` — name, role, location, intro, bio
- `PROJECTS` — selected work (4 by default)
- `SKILLS` — grouped toolkit
- `EXPERIENCE` — career timeline
- `NAV_LINKS` — header nav

Edit those and the rest of the layout updates. The colour palette and type
scale are in `tailwind.config.js` under `theme.extend.colors` and
`theme.extend.fontFamily` — swap `ochre` for any accent you prefer.

## Stack

Vite + React 18 + TypeScript + Tailwind. Fraunces (display serif) and Geist
(sans + mono) loaded from Google Fonts in `index.html`. No runtime data —
fully static, deploys anywhere.
