const CACHE_NAME= 'mi-pwa-cache-v1';
const urlsToCache= [
    './',
    './index.html',
    './app.js',
    'htpps://stackpath.boostrapcdn.com/boostrap/4.5.2/css/boostrap.min.css'   
];

//Evento de instlación
self.addEventListener('install', event =>{
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache=>{
            console.log('Abriendo Caché');
            return cache.addAll(urlsToCache);
        })
    );
});

//evento de activación
self.addEventListener('activate', event =>{
    console,log('Service Worker activado');
});

//Evento fetch para interceptar solicitudes y servir desde caché
self.addEventListener('fetch', event=> {
    event.respondWith(
        caches.match(event.request)
        .then(response =>{
            return response || fetch(event.request);
        })
    );
});