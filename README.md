# kratky.tech

Personal portfolio website of DI(FH) Romuald Kratky — [kratky.tech](https://kratky.tech/)

Built with [Next.js](https://nextjs.org/) 16, TypeScript, and Tailwind CSS v4. Deployed to Azure Static Web Apps.

## Features

- Static export (no server runtime)
- i18n (German / English) via next-intl
- Dark / Light mode via next-themes
- WebGL shader hero background (three.js + React Three Fiber)
- Glassmorphism UI with Geist typography

## Development

```bash
nvm use         # Node 22
npm install
npm run dev     # localhost:3000
npm run verify  # typecheck + lint + format:check + build
```
