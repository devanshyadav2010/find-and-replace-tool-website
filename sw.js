const cacheName = 'find-and-replace-v1';
const filesToCache = [
  '/',
  'index.html',
  'styles.css',
  'scripts.js',
  'logo.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
