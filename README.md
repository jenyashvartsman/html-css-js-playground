# HTML, CSS, JS Playground

A small Angular playground for writing HTML, CSS, and JavaScript side by side and previewing the result live.

## Live App

GitHub Pages deployment:

`https://jenyashvartsman.github.io/html-css-js-playground/`

## Features

- Separate editors for HTML, CSS, and JavaScript
- Live preview rendered in an isolated iframe
- Basic validation for each editor
- Inline error states on the relevant panel
- Local storage persistence
- Reset button that restores the default sample
- NgRx store for playground state

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm start
```

Then open `http://localhost:4200/`.

## Build

Create a production build:

```bash
npm run build
```

## Deploy To GitHub Pages

Build for GitHub Pages:

```bash
npm run build:gh-pages
```

Build and deploy:

```bash
npm run deploy:gh-pages
```

The deployment is configured for the repository path `/html-css-js-playground/`.
