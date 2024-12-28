const CACHE_NAME = 'portfolio-cache-v1'; 
const urlsToCache = [
  '/',               // Main page
  '/index.html',     // HTML file
  '/styles.css',     // CSS file
  '/script.js',      // JS file
  '/images/logo.png' // Example static asset
];

// Install Event: Cache Files
self.addEventListener('install', event => {
  console.log('Service Worker: Install event triggered');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Service Worker: Caching files', urlsToCache);
      return cache.addAll(urlsToCache);
    }).catch(error => {
      console.error('Failed to cache resources:', error);
    })
  );
});

// Fetch Event: Serve Cached Files
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Activate Event: Clean Up Old Caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
