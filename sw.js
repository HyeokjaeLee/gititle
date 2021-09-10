self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("fox-store")
      .then((cache) =>
        cache.addAll([
          "/gititle/",
          "/gititle/index.html",
          "/gititle/index.js",
          "/gititle/style.css",
          "/gititle/fox1.jpg",
          "/gititle/fox2.jpg",
          "/gititle/fox3.jpg",
          "/gititle/fox4.jpg",
        ])
      )
  );
});

self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
