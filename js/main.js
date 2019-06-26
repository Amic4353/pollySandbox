// Make sure sw are supported
// const { webScraper } = require('../webScraper');
// webScraper(
//   'https://medium.com/@appsupernova/supernova-101-react-exporter-6218adc998cc',
//   'goal1'
// );

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('../sw_cached_pages.js')
      .then(reg => console.log('Service Worker: Registered (Pages)'))
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}
