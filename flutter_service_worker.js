'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "87104d682d39b4b6f3e86220480b84bd",
"assets/AssetManifest.bin.json": "a8cd8c39981436d9c0728cec641dbc34",
"assets/AssetManifest.json": "9e202d385b514247962f8c86276f0126",
"assets/assets/img/ammonite-fossil-circle.png": "2112e00c499e9f5cb1d81ea07e023991",
"assets/assets/img/ammonite-fossil.png": "f4a5e8577b84169ca0cd567527f3958c",
"assets/assets/img/bmc_qr.png": "b31c488ddc13a75e955e7a3d633beb14",
"assets/assets/img/home-img1.JPG": "64b86e737b109f5dab7c1d10461c8d7f",
"assets/assets/img/home-img2.JPG": "35d69f7d3f979b4dfd7994b2567e3d03",
"assets/assets/img/home-img3.JPG": "ef020556d8b8561d774d7fa20963841f",
"assets/assets/img/mobile-app-preview-1.png": "4a752f676037c5df3ac5923a9d4c9406",
"assets/assets/img/mobile-app-preview.png": "c9791e0e92e474640ef0f28c63af9f1f",
"assets/assets/img/phoneModel.png": "bf253bcdfa1ce67555f4c939858f6091",
"assets/assets/img/phoneModel2.png": "87e4630e0ec68cececd74e80113eb090",
"assets/assets/img/store.png": "7db602521f43957f3555c3b3ef783c7e",
"assets/assets/img/web.png": "943a4ff9b5692108aecf317c8330202a",
"assets/assets/img/window-app-preview.png": "a45ee16e8a2b2fe1f05971ab8faed59c",
"assets/assets/phraseology/en.json": "ffcbd25a87c7508bd368dfa0845a4c59",
"assets/assets/phraseology/pt.json": "1dfdcae3db33e00ca89b2b1252d63b8f",
"assets/assets/svg/0.svg": "5ea63968ce104d38c75036503485ee25",
"assets/assets/svg/1.svg": "16c6530fda1eceee60973a7cffff5763",
"assets/assets/svg/10.svg": "23257095eea1af2d3195b05b6ff0a981",
"assets/assets/svg/11.svg": "7ab5ec6126c50c685224d2c1d881d32d",
"assets/assets/svg/12.svg": "51b0303812f5d0af803bdfbebe9f9634",
"assets/assets/svg/13.svg": "2dd3eb0099f18a6d52a0a39de44cf630",
"assets/assets/svg/14.svg": "3bbb729a88e9bcd456953604c8157f0a",
"assets/assets/svg/15.svg": "1df29b64eae8fc74d264a3b9712be29d",
"assets/assets/svg/16.svg": "16bdf7a87d3237b9d0bac982a30683fb",
"assets/assets/svg/17.svg": "9793e6c356e29315ad1fe199e74148ca",
"assets/assets/svg/18.svg": "caaf670261f28fdcfb1c1f3debed12d1",
"assets/assets/svg/19.svg": "ba4d3866dfa4741bb2d07727af5f0e70",
"assets/assets/svg/2.svg": "134e100ee1a4ae326bfd3ab2204ab49a",
"assets/assets/svg/20.svg": "8958f467f782102fa872448565823d4a",
"assets/assets/svg/2b.svg": "c8072d32c0e6d882088e9440598611c2",
"assets/assets/svg/2g.svg": "f08d13e59502590195efca1fa2dbd0d5",
"assets/assets/svg/2r.svg": "5928dd157643ea52f6d908f98aafca63",
"assets/assets/svg/2u.svg": "bc84a9d0869630ddb864875f0f60d31a",
"assets/assets/svg/2w.svg": "2e2dc8dd329a316b359d9be2c4daadcc",
"assets/assets/svg/3.svg": "d24f70e0a38d53215ad4cbb108fdfb11",
"assets/assets/svg/4.svg": "5092efd13bf05a640b411fe509253a68",
"assets/assets/svg/5.svg": "daac6a103a933972732399597bec3faa",
"assets/assets/svg/6.svg": "9f0d8f886b607557415a68ecfe5d28cc",
"assets/assets/svg/7.svg": "f59314815fc6667660589962ba6c48fe",
"assets/assets/svg/8.svg": "5994402bc9b2c439cc288973bf62c57a",
"assets/assets/svg/9.svg": "1dc6283cdb8752ba665f28a17408a3df",
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
"assets/assets/svg/bg.svg": "de0ca2d4c466d6ceebd41709358b5e39",
"assets/assets/svg/bmc-logo.svg": "e3bad2b8bcc86d561240e36806d92d19",
"assets/assets/svg/bp.svg": "08847d73a45f4849a10d4e28da52e5f4",
"assets/assets/svg/br.svg": "a30f4168a256501793f98c09cce0ab90",
"assets/assets/svg/card-joker.svg": "65b9507062ce270c64625c567d54fbce",
"assets/assets/svg/cityBlessing.svg": "1c28cceb462e12d72b6c511648174cb5",
"assets/assets/svg/coin.svg": "cd439abb4b4988b8cb20878e822e5aa0",
"assets/assets/svg/commander-dmg.svg": "bc9df6c763fe4fe03dec508d817de540",
"assets/assets/svg/e.svg": "8f1abd5aa3414f26b173ebdb85e8b2be",
"assets/assets/svg/energy.svg": "85b461f41bbb057adb5583fc8d4d306c",
"assets/assets/svg/enlightenment.svg": "195301afc41676cfc15adb7b0e29d7e5",
"assets/assets/svg/exit-door.svg": "c2480cfc5532b7f8b054ff03dec6a84e",
"assets/assets/svg/exp.svg": "8aa0b1da1b3d715fcae151e736ca7b53",
"assets/assets/svg/gp.svg": "1adea9e7bf72b22d50e5ef63ead562fb",
"assets/assets/svg/gu.svg": "eec637ba51bbb937b4b2a5e820eb7ff2",
"assets/assets/svg/gw.svg": "94c9fccd728ab096ad7e5d3f68a79090",
"assets/assets/svg/help.svg": "1dfb8d559e4a11da11c345f4bb2c1925",
"assets/assets/svg/history.svg": "251fd992f10eca16d06f829f01112c42",
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
"assets/assets/svg/p.svg": "aaafb235e17c801a7fe6a8dca6ebfcc1",
"assets/assets/svg/pause-button.svg": "c243758a0b1c8c227801b9be4cc60006",
"assets/assets/svg/poison-bottle.svg": "0504eb04a599228ca59a92888b684795",
"assets/assets/svg/Q.svg": "9c89b5395ed32b2f0a2db239ff847f54",
"assets/assets/svg/radioactive.svg": "16320df19cd6bea0c8b95161c3339fea",
"assets/assets/svg/rg.svg": "83d0f707da0f8e088fd81ec2e5ae808f",
"assets/assets/svg/round-table.svg": "f62f26f561054371ace75824113839bc",
"assets/assets/svg/rp.svg": "0afc03ebf0db73b44e1e8d2532bca98b",
"assets/assets/svg/rw.svg": "6e3322a95470837fb23d4f2a44a3235a",
"assets/assets/svg/s.svg": "11e96b0bc1d5e44df38a9ce150b3c50f",
"assets/assets/svg/stack.svg": "aac444fb6dc9b35836d5a53bdfb0369a",
"assets/assets/svg/T.svg": "37645e99dd74e070386875beb7916413",
"assets/assets/svg/tabletop-2players.svg": "065d507d05f3fde7ab669bae7de72782",
"assets/assets/svg/token.svg": "f941ac7cf90753e9d7420a8c2de3ecc3",
"assets/assets/svg/tombstone.svg": "c9ace64997644d7e20dd6a89f79a75ec",
"assets/assets/svg/trophy.svg": "ebb27fefba4fd9a8d0a0dcddc345ddc0",
"assets/assets/svg/ub.svg": "b2294d2fa2e77f59dbb8442374357b6c",
"assets/assets/svg/up.svg": "5fbccebe23ff6b840b60f32867af604c",
"assets/assets/svg/ur.svg": "afb56fae519f6b96deba4acb314a0211",
"assets/assets/svg/wb.svg": "bfdba97be4a989bc82d9d2bfe0d88e35",
"assets/assets/svg/wp.svg": "7b23ad7f94c203ab341b6c10953eaae6",
"assets/assets/svg/wu.svg": "77276650ab0c78ec13399b89cc6a0e51",
"assets/assets/svg/x.svg": "aef664bbe8dce04e0416d198d376289f",
"assets/FontManifest.json": "aed2b02323ee1c15e32a18f07088b8e3",
"assets/fonts/MaterialIcons-Regular.otf": "7c89c3e013cbed25db9f6c6ff0e73652",
"assets/NOTICES": "60fcac9d1facbb78966a4cd7fabad944",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "0a92c9476e985130a3465876c97401c0",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "f934ef9aa0078c2eeb160231a4375754",
"icons/Icon-192.png": "936b6f12301c8da13a565f58c47964b3",
"icons/Icon-512.png": "ea0f912ea5b23907083eb4e81d0d4be8",
"icons/Icon-maskable-192.png": "936b6f12301c8da13a565f58c47964b3",
"icons/Icon-maskable-512.png": "ea0f912ea5b23907083eb4e81d0d4be8",
"index.html": "8a7f99e1337d001747a4fbed1ebbae33",
"/": "8a7f99e1337d001747a4fbed1ebbae33",
"main.dart.js": "7f5d29222e2c9e6db49a2048a1e020a3",
"manifest.json": "ee356fd9e28ac3af6c95c056731d040e",
"version.json": "d83ece303001703d257b5762c7f001ca"};
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
