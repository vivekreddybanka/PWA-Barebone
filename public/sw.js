self.addEventListener('install', function(event) {
    console.log('[Service worker] Installing Service worker...', event)
});

self.addEventListener('activate', function(event) {
    console.log('[Service worker] activating service worker...', event);
    return self.clients.claim();
})

self.addEventListener('fetch', function(event) {
    console.log('[Service worker] afetch event is trigger ..', event);
    event.respondWith(fetch(event.request));
})