const SCOPE = self.registration.scope;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("connoisseur-v3")
      .then((cache) => cache.addAll([SCOPE]))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== "connoisseur-v3")
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const isTile =
    url.hostname === "iiif.micr.io" || url.hostname === "micrio.rijksmuseum.nl";
  const isPoster = url.pathname.includes("/works/");
  const isPage = request.mode === "navigate";

  if (isPage) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open("connoisseur-v3").then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() =>
          caches
            .match(request)
            .then((cached) => cached || caches.match(SCOPE)),
        ),
    );
    return;
  }

  if (isTile || isPoster) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches
              .open("connoisseur-v3")
              .then((cache) => cache.put(request, copy));
          }
          return response;
        });
      }),
    );
  }
});
