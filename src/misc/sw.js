
if (
    typeof ServiceWorkerGlobalScope !== 'undefined' &&
    self instanceof ServiceWorkerGlobalScope
  ) {
    self.addEventListener('install', (event) => {
      event.waitUntil(self.skipWaiting());
    });
  
    self.addEventListener('activate', (event) => {
      const p = (async () => {
        await self.clients.claim();
  
        const existingClients = await clients.matchAll({
          includeUncontrolled: true,
          type: 'window',
        });
  
        // We must activate and claim our clients before forcing them to navigate,
        // even for a basic reload.
        existingClients.forEach((client) => client.navigate(client.url));
      })();
  
      event.waitUntil(p);
    });
  }