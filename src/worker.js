addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});

async function handleRequest() {
  return fetch(
    "https://contra.github.io/contra-status-pages/maintenance.html"
  );
}
