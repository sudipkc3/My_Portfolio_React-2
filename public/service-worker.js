const CACHE_NAME = 'my-pwa-cache-v2.1'; // Update cache name to ensure old cache is replaced

const urlsToCache = [
  '/',                       // Main page
  '/index.html',             // HTML file
  '/assets/Styles.css',      // CSS file path
  '/assets/Script.js',       // JS file path
  '/Images/Logo.png',        // Logo image path
  '/Images/ME.jpg',          // About me image file
  '/Images/Container right.jpg' // Hero section image file
];

// Install Event: Cache Files
self.addEventListener('install', event => {
  self.skipWaiting(); // Force the service worker to activate immediately
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    }).catch(error => {
      console.error('Failed to open cache:', error);
    })
  );
});

// Fetch Event: Serve Cached Files
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).then(response => {
      // Clone and cache the response
      const responseClone = response.clone();
      caches.open(CACHE_NAME).then(cache => {
        cache.put(event.request, responseClone);
      });
      return response; // Return the fetched response
    }).catch(() => {
      return caches.match(event.request); // Fallback to cache if offline
    })
  );
});

// Activate Event: Clean Up Old Caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
  event.waitUntil(clients.claim()); // Ensures the updated service worker takes control of all open tabs
});
