// No-op service worker placeholder.
// Some browsers/extensions request /sw.js by default.
self.addEventListener("install", () => {
  // @ts-ignore
  self.skipWaiting?.();
});
self.addEventListener("activate", () => {
  // @ts-ignore
  self.clients?.claim?.();
});

