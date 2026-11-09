const C='kotodoska-b4a95b7aba96',PRE=['./index.html','./teacher.html','./uchitel-d339a8b5f84345a8.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(PRE.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==location.origin||u.pathname.includes('/ffmpeg/'))return;
 const page=r.mode==='navigate'||/\.html$|\/$/.test(u.pathname);
 if(page){e.respondWith(fetch(r).then(n=>{if(n.ok){const k=n.clone();caches.open(C).then(c=>c.put(r,k));}return n;}).catch(()=>caches.match(r,{ignoreSearch:true}).then(h=>h||(/index\.html$|\/$/.test(u.pathname)?caches.match('./index.html'):Response.error()))));return;}
 e.respondWith(caches.match(r,{ignoreSearch:true}).then(h=>h||fetch(r).then(n=>{if(n.ok){const k=n.clone();caches.open(C).then(c=>c.put(r,k));}return n;})));});
