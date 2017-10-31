importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "https://derevandal.github.io/idepead-subscription-frontend/app.1f6ede74514968e3deef.js",
    "revision": "01dc45d39c434756ec407bde6a258291"
  },
  {
    "url": "https://derevandal.github.io/idepead-subscription-frontend/common.18f50d38e299987fd380.js",
    "revision": "972d8261541f87fc387936e8e6247204"
  },
  {
    "url": "https://derevandal.github.io/idepead-subscription-frontend/common.c9067056d0ae4dec8dd414514e06401e.css",
    "revision": "c9067056d0ae4dec8dd414514e06401e"
  },
  {
    "url": "https://derevandal.github.io/idepead-subscription-frontend/layouts/default.f34e61da2e1845a17bc9.js",
    "revision": "140e07366c23eb209092aa7dd7e0ee6a"
  },
  {
    "url": "https://derevandal.github.io/idepead-subscription-frontend/manifest.1646081f453543905e25.js",
    "revision": "69d0f3887dec126d80a353e6d9b9522a"
  },
  {
    "url": "https://derevandal.github.io/idepead-subscription-frontend/pages/index.7b11eeeb046a9747bb89.js",
    "revision": "85f2d2cbfa9bd0f5ddb8886ae4eabfa7"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "idepead-subscription-frontend_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('https://derevandal.github.io/idepead-subscription-frontend/**', workboxSW.strategies.cacheFirst({}), 'GET');
