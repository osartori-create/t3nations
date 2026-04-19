const CACHE_NAME = 't3n-v1';
const ASSETS = [
  'maitre.html',
  'terrain.html',
  'public.html',
  'manifest.json'
];

// Installation : mise en cache des fichiers de base
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Interception des requêtes pour le mode hors-ligne
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});