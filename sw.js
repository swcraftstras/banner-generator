const BASE_URL = `https://swcraftstras.github.io/banner-generator`;
const CACHE_NAME = 'banner-builder-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/assets/plage-digitale-logo.png',
    '/assets/swcraft-logo.png',
    '/css/style.css',
    '/css/banner-rendering.css',
    '/lib/main.js',
    '/lib/speakers.js',
    '/lib/sponsors.js',
    '/lib/state.js',
    '/lib/vendor/html2canvas/html2canvas-min.js',
    '/lib/vendor/canvas2image/canvas2image.js',
    '/fonts/jetbrains-mono/JetbrainsMono.css',
    '/fonts/jetbrains-mono/JetBrainsMono-Regular.woff2'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[ServiceWorker] Caching app shell');
                return cache.addAll(urlsToCache.map(it => `${BASE_URL}${it}`));
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response

                if (response) {
                    return response;
                }
                // Not in cache, fetch from network
                return fetch(event.request);
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log('[ServiceWorker] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
