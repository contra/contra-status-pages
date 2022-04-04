# Contra Status Pages

Static HTML pages that are displayed when Cloudflare detects an outage or there is a planned maintenance.

## Cloudflare Setup

These pages are configured under `contra.com > Custom Pages` at https://cloudflare.com/.

* `500 Class Errors` has to map to `pages/5xx.html`
* `1000 Class Errors` has to map to `pages/1xxx.html`

## Development

There are no build steps in the project – HTML and CSS are hand crafted.

Use `npm run start` to launch HTTP server for serving files in `./pages`.

```bash
npm run start
```
