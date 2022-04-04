# Contra Status Pages

Static HTML pages that are displayed when Cloudflare detects an outage or there is a planned maintenance.

## Cloudflare Setup

### Configuring Error Pages

These pages are configured under `contra.com > Custom Pages` at https://cloudflare.com/.

* `500 Class Errors` has to map to [src/pages/5xx.html](./src/pages/5xx.html)
* `1000 Class Errors` has to map to [src/pages/1xxx.html](./src/pages/1xxx.html)

### Configuring Maintenance Page

The [maintenance template](./src/pages/maintenance.html) is served using Cloudflare Worker.

* The script is available [src/worker.js](./src/worker.js)
* Worker is hosted at https://maintenance.contrawork.workers.dev/

If you are making changes to the script, then update code in git first and then upload it to Cloudflare.

## Development

Use `npm run build` to build ejs templates. The resulting files are stored in `./docs`.

Use `npm run start` to launch HTTP server and serve files in `./docs`.

```bash
npm run build
npm run start
```

Notes:

* You must commit the generated (`./docs`) files to the repository.
* The use of `./docs` directory name is forced by GitHub Pages configuration.

## Hosting

These pages are hosted using GitHub Pages:

* https://contra.github.io/contra-status-pages/1xxx.html
* https://contra.github.io/contra-status-pages/5xx.html
* https://contra.github.io/contra-status-pages/maintenance.html