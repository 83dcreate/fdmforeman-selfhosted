// Service worker disabled — unregister and clear all caches
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', async (e) => {
  e.waitUntil(
    Promise.all([
      caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))),
      self.clients.claim(),
    ])
  );
});
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
