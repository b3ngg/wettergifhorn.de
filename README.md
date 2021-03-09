This repository contains a new version of wettergifhorn.de. This version focuses more on text-based forecasts.

## Tech stack

The texts are written, managed and stored in Notion. Via [this](https://github.com/splitbee/notion-api-worker) unofficial API the texts are loaded directly in the frontend. The texts are then rendered with Svelte. This eliminates the need for a backend and allows easy and fast access.

## Get started

```bash
npm install
npm run dev
```
