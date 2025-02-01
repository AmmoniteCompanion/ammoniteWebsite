'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a751c62250b5f344824c4ea33f44b704",
"assets/AssetManifest.bin.json": "b03e674522043fd2edd31435c45c23a1",
"assets/AssetManifest.json": "a50f4d52ed391d1afd23d8bc192fdc99",
"assets/assets/img/ammonite-fossil-circle.png": "2112e00c499e9f5cb1d81ea07e023991",
"assets/assets/img/ammonite-fossil.png": "f4a5e8577b84169ca0cd567527f3958c",
"assets/assets/img/Capture1-mobile.png": "4a752f676037c5df3ac5923a9d4c9406",
"assets/assets/img/capture1.PNG": "073d67ee9013c8dd45ef4d3cb62beb24",
"assets/assets/img/Capture2-mobile.png": "c9791e0e92e474640ef0f28c63af9f1f",
"assets/assets/img/capture2.png": "a45ee16e8a2b2fe1f05971ab8faed59c",
"assets/assets/img/store.png": "7db602521f43957f3555c3b3ef783c7e",
"assets/assets/img/web.png": "943a4ff9b5692108aecf317c8330202a",
"assets/assets/phraseology/en.json": "ffcbd25a87c7508bd368dfa0845a4c59",
"assets/assets/phraseology/pt.json": "1dfdcae3db33e00ca89b2b1252d63b8f",
"assets/assets/svg/ammonite-10-dice.svg": "14f6d8ebf99a384edc904ea97229b3df",
"assets/assets/svg/ammonite-12-dice.svg": "8f63d1963253a2c569f5cc28c1913bb4",
"assets/assets/svg/ammonite-20-dice.svg": "d4563f05cbbc7cafa93f95861fb5c577",
"assets/assets/svg/ammonite-4-dice.svg": "0f472d02408ddb1e596a505dd3f85256",
"assets/assets/svg/ammonite-6-dice.svg": "6a053c4cfbaa0d5acea0b6161295846f",
"assets/assets/svg/ammonite-8-dice.svg": "8b2ab8803713bc2c967c169e2a994610",
"assets/assets/svg/ammonite-fossil.svg": "ea3f4a2aab41cd834daa3497fa19586e",
"assets/assets/svg/ammonite-logo-20-transparency.svg": "998fc513e2d776e3798a5826a7234fa9",
"assets/assets/svg/ammonite-logo-stroke.svg": "a739ba54d957c4c886413002be3051cf",
"assets/assets/svg/ammonite-logo.svg": "8a184c9b40ae1aafefa96179ca0624ad",
"assets/assets/svg/ammonite.svg": "98ee202fafb0db20f13f18047d04e27a",
"assets/assets/svg/backward-time.svg": "147727156043430d0626e358f3f87771",
"assets/assets/svg/battle-gear.svg": "163dde738c91289054b929892b5142f8",
"assets/assets/svg/commander-dmg.svg": "bc9df6c763fe4fe03dec508d817de540",
"assets/assets/svg/energy.svg": "85b461f41bbb057adb5583fc8d4d306c",
"assets/assets/svg/enlightenment.svg": "195301afc41676cfc15adb7b0e29d7e5",
"assets/assets/svg/exit-door.svg": "c2480cfc5532b7f8b054ff03dec6a84e",
"assets/assets/svg/help.svg": "1dfb8d559e4a11da11c345f4bb2c1925",
"assets/assets/svg/infinity.svg": "7135fafebdfc462b9dade56f2ee70105",
"assets/assets/svg/light-bulb.svg": "f207f43f96ecbaa4d92d7c1daa3afd06",
"assets/assets/svg/long-antennae-bug.svg": "cc49ad49f4bf991f5d66d81d5e82c4b0",
"assets/assets/svg/mana/B.svg": "f68809d4f072d976ad534a80c40ab3cd",
"assets/assets/svg/mana/C.svg": "25425f71d40e750066144d24bcce49b4",
"assets/assets/svg/mana/G.svg": "93f0ffd310b8a2f904f563a52bf33598",
"assets/assets/svg/mana/R.svg": "fad05c8232b36c0ef327b9701b9afb16",
"assets/assets/svg/mana/U.svg": "6249a48f3283f4053709fe5276a3c99a",
"assets/assets/svg/mana/W.svg": "e09c9b001fae5a882a6ea4c854922539",
"assets/assets/svg/medal.svg": "47d20ce47afe295f0bfc15745f5ea69a",
"assets/assets/svg/pause-button.svg": "c243758a0b1c8c227801b9be4cc60006",
"assets/assets/svg/poison-bottle.svg": "0504eb04a599228ca59a92888b684795",
"assets/assets/svg/stack.svg": "aac444fb6dc9b35836d5a53bdfb0369a",
"assets/assets/svg/token.svg": "f941ac7cf90753e9d7420a8c2de3ecc3",
"assets/assets/svg/trophy.svg": "ebb27fefba4fd9a8d0a0dcddc345ddc0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0ad87dc1791900738c728966bec81efe",
"assets/NOTICES": "9cab2c949a695ade349cecc8f554c1f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "0a92c9476e985130a3465876c97401c0",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "f17a433d3452307cb221bf969b735ce5",
"icons/Icon-192.png": "936b6f12301c8da13a565f58c47964b3",
"icons/Icon-512.png": "ea0f912ea5b23907083eb4e81d0d4be8",
"icons/Icon-maskable-192.png": "936b6f12301c8da13a565f58c47964b3",
"icons/Icon-maskable-512.png": "ea0f912ea5b23907083eb4e81d0d4be8",
"index.html": "bd6b542c2192ba521ab7a3391fe781c1",
"/": "bd6b542c2192ba521ab7a3391fe781c1",
"main.dart.js": "7a92c0e26e8bdbdd16163c70e867e718",
"manifest.json": "b2fa7263428e307a62356af8423d5dac",
"version.json": "876f259f8c1dcaf283c534c83a54f36e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
