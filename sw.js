const C='kotodoska-649eefb5bd66';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'])).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
 e.respondWith(caches.match(r,{ignoreSearch:true}).then(h=>h||fetch(r).then(n=>{if(n.ok){const k=n.clone();caches.open(C).then(c=>c.put(r,k));}return n;}).catch(()=>caches.match('./index.html'))));});
