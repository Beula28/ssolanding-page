export default {
  fetch(request) {
    return new Response(JSON.stringify({ ok: true, route: "test" }), {
      headers: { "content-type": "application/json" }
    });
  }
}
