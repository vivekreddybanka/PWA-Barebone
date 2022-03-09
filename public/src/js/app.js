var deferrendinstall

if('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/sw.js')
    .then(() => {
        console.log('register the service worker');
    });
}

window.addEventListener('beforeinstallprompt', function(event) {
    console.log('before install prompt fired');
    event.preventDefault();
    deferrendinstall = event;
    return false;
})