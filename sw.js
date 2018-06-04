/**
 * static cache name
 */
 const staticCacheName = 'restaurant-v1';

/**
 * Cache assets after service worker install
 */
self.addEventListener('install', function(e) {
  console.log('attempting to cache assets');
  e.waitUntil(
    caches.open('staticCacheName').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/restaurant.html',
        '/css/styles.css',
        '/data/restaurants.json',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
      ]);
    })
  );
});

/**
 * Remove previous caches after service worker activation
 */
self.addEventListener('activate', function(event) {
  console.log('Service Worker activating.');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('restaurant') &&
          cacheName != staticCacheName;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

/**
 * Upon fetch request, first request from cache
 */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          console.log('Cache hit - return response');
        return response;
        }

        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            console.log('Checking if valid response was received');
            if(!response || response.status !== 200 || response.type !== 'basic') {
              console.log('Valid response received and cloned');
              return response;
            }

            var responseToCache = response.clone();

            caches.open(staticCacheName)
              .then(function(cache) {
                console.log('Adding cloned response to cache');
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
