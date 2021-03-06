const staticApp = "calc-imc";
const assets = [
  "/imc/",
  "/imc/index.html",
  "/imc/static/css/main.b163f760.css",
  "/imc/static/js/main.e63737bc.js",
  "/imc/static/media/pexels-photo-235990-pixabay-w1920.4e54070853fde6497765.jpeg",
  "/imc/static/media/pexels-photo-235990-pixabay-h1024.802e65284a64b857610c.jpeg",
  "/imc/static/media/pexels-photo-235990-pixabay-w1366.7b440125d48a884269ec.jpeg",
  "/imc/static/media/pexels-photo-235990-pixabay-h736.3ef5cc81eefe4b0e949a.jpeg",
  "/imc/static/media/logo-adrianoenache-white.16fa9bd753d0603780341daa75799e67.svg"
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
