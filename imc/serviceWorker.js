const staticApp = "calc-imc";
const assets = [
  "/",
  "/index.html",
  "/static/css/main.7c3a0466.css",
  "/static/js/main.321b268d.js",
  "/static/media/pexels-photo-235990-pixabay-w1920.4e54070853fde6497765.jpeg",
  "/static/media/pexels-photo-235990-pixabay-h1024.802e65284a64b857610c.jpeg",
  "/static/media/pexels-photo-235990-pixabay-w1366.7b440125d48a884269ec.jpeg",
  "/static/media/pexels-photo-235990-pixabay-h736.3ef5cc81eefe4b0e949a.jpeg",
  "/static/media/logo-adrianoenache-white.16fa9bd753d0603780341daa75799e67.svg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticApp).then(cache => {
      cache.addAll(assets)
    })
  )
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
});
