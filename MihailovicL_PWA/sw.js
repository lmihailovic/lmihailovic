self.skipWaiting();

var staticCacheName = "cache-info";

self.addEventListener('install', event => {
    event.waitUNtil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll([
                '/', '/style.css', '/app.js', '/manifest.json', '/sw.js' , 'https://api.spacexdata.com/v3/info'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    const request = event.request;
    event.respondWith(cacheFirst(request));
});

async function cacheFirst(request) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || fetch(request)
}
