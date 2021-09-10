const repositoryName = "gititle",
  make_default_path = (paths) => paths.map((path) => `/${repositoryName}/${path}`);

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(repositoryName)
      .then((cache) =>
        cache.addAll(
          make_default_path([
            "",
            "index.html",
            "assets/js/install-handler.js",
            "assets/js/main.js",
            "assets/style/css/main.min.css",
            "assets/icon/icon-192x129.png",
            "assets/icon/icon-256x256.png",
            "assets/icon/icon-384x384.png",
            "assets/icon/icon-512x512.png",
          ])
        )
      )
  );
});

self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
