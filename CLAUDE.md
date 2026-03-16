# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start       # Dev server at http://localhost:3000
npm run build   # Production build to /build
npm test        # Run tests in watch mode
npm test -- --watchAll=false  # Run tests once (CI mode)
```

## Architecture

This is a single-page portfolio app built with Create React App. The entire UI lives in one file: `src/App.js`.

**`src/App.js`** exports a single `Portfolio` component that renders all sections inline: Hero, Sobre Mí, Experiencia, Proyectos, Habilidades, Contacto. All data (experience, projects, skills) is defined as plain arrays/objects inside the component — there is no external data source, API, or routing.

**Styling:** Tailwind CSS v3 via `src/index.css` (only the three `@tailwind` directives). Dark mode is controlled by `isDarkMode` state and applied via conditional class strings throughout the JSX — there is no `darkMode: 'class'` Tailwind config, so dark styles are toggled manually via ternary expressions.

**Icons:** `lucide-react` is the only icon library.

**Google Fonts:** Inter is loaded imperatively at module scope (DOM manipulation before component mount) rather than via `<link>` in `public/index.html`.

## Adding projects or experience

To add a new project, append an entry to the `proyectos` array inside `Portfolio`. To add work experience, append to `experiencia`. Both are plain JS objects — no store or external state management.
