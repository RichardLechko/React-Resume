// public/service-worker.js

const CACHE_NAME = "v1";
const CACHE_ASSETS = [
  "/",
  "/index.html",
  "/static/js/bundle.js", // Update with your actual paths
  "/static/css/main.css",
  // Add any other assets to cache
];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching files");
      return cache.addAll(CACHE_ASSETS);
    })
  );
});

// Fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Activate event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Clearing old cache");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
