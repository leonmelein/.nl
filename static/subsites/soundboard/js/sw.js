var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    '/css/app.css',
    '/js/app.js',
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    'bower_components/jquery/dist/jquery.min.js',
    'audio/academic-freedom.mp3',
    'audio/asscher.mp3',
    'audio/baudet-latijn.mp3',
    'audio/behalve-jij.mp3',
    'audio/bel.mp3',
    'audio/breek-het-partijkartel.mp3',
    'audio/build-a-wall.mp3',
    'audio/calimerogedrag.mp3',
    'audio/china.mp3',
    'audio/christendemocraat.mp3',
    'audio/denk-het-niet-job.mp3',
    'audio/diplomas.mp3',
    'audio/doe-eens-normaal-man.mp3',
    'audio/doe-lekker-zelf-normaal.mp3',
    'audio/echt-erg.mp3',
    'audio/echt-iets-mee-doen.mp3',
    'audio/grab-em-by-the-pussy.mp3',
    'audio/jij-ook.mp3',
    'audio/lieuwlieuwlieuw.mp3',
    'audio/lingo-leader.mp3',
    'audio/lingo-letter-fout.mp3',
    'audio/lingo-letter-goed-verkeerde-plek.mp3',
    'audio/lingo-letter-goed.mp3',
    'audio/lingo-nadenken.mp3',
    'audio/lingo-outro.mp3',
    'audio/meeste-over-weten.mp3',
    'audio/minder-minder-minder.mp3',
    'audio/nooit-idealen-verloochenen.mp3',
    'audio/nos-journaal.mp3',
    'audio/ns-omroep.mp3',
    'audio/nu-doet-u-het-weer.mp3',
    'audio/kapot-te-maken.mp3',
    'audio/onvoldoende.mp3',
    'audio/opportunities.mp3',
    'audio/partijkartel.mp3',
    'audio/regelen.mp3',
    'audio/sombrero.mp3',
    'audio/stekker-erin.mp3',
    'audio/stekker-eruit.mp3',
    'audio/subtantieel.mp3',
    'audio/trap-er-niet-in.mp3',
    'audio/u-draait-niet-eerlijk.mp3',
    'audio/u-kijkt-zo-lief.mp3',
    'audio/van-de-media.mp3',
    'audio/voldoende.mp3',
    'audio/wie-ben-jij.mp3',
    'audio/wizzout.mp3',
    'audio/yantai.mp3',
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});