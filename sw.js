const CACHE_NAME = 'noir-rain-v1'; 

self.addEventListener('install', (event) => {
  self.skipWaiting(); 
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        'index.html',
        'manifest.json',
        'icon-192.png',
        'icon-512.png'
      ]).catch(err => console.log("Cache bypass:", err)); 
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
