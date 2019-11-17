const scrape = require('website-scraper');
const PhantomPlugin = require('website-scraper-phantom');

var ur = 'https://facebook.com';
console.log(ur);
scrape({
    urls: [ur],
    directory: ur,
    plugins: [ new PhantomPlugin() ]
});