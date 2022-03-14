var button = document.querySelector('#start_button');
var output = document.querySelector('#output');

var deferrendinstall

if  (!window.Promise) {
    window.Promise = Promise
}
if('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/sw.js')
    .then(() => {
        console.log('register the service worker');
    });
}
button.addEventListener('click', function() {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('https:/swapi.co/api/people/1');
        }, 3000);
    })
    .then(function(url) {
        return fetch(url);
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        output.textContent = data.name;
    })
})

window.addEventListener('beforeinstallprompt', function(event) {
    console.log('before install prompt fired');
    event.preventDefault();
    deferrendinstall = event;
    return false;
})