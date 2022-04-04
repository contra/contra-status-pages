addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});

async function handleRequest() {
  const response = await fetch(
    "https://contra.github.io/contra-status-pages/maintenance.html"
  );

  const nextResponse = new Response(response.body, response);

  nextResponse.headers.delete("cache-control");
  nextResponse.headers.set("cache-control", "no-store");

  return nextResponse;
}
