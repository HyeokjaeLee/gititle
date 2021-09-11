let cacheName = "gititle";

let filesToCache = [
  "/gititle/",
  "service-worker.js",
  "assets/js/data.js",
  "assets/js/main.js",
  "assets/js/install-handler.js",
  "assets/js/cache-handler.js",
  "assets/js/settings.js",
  "assets/style/css/main.min.css",
  "assets/icon/icon-192x192.png",
  "assets/icon/icon-256x256.png",
  "assets/icon/icon-384x384.png",
  "assets/icon/icon-512x512.png",
  "manifest.webmanifest",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("installed successfully");
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  if (event.request.url.includes("clean-cache")) {
    caches.delete(cacheName);
    console.log("Cache cleared");
  }

  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        console.log("served form cache");
      } else {
        console.log("Not serving from cache ", event.request.url);
      }
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (key !== cacheName) {
            console.log("service worker: Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});
