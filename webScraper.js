const scrape = require('website-scraper');
const uuidv3 = require('uuid/v3');

async function webScraper(url, goal) {
  const options = {
    urls: [url],
    directory: `./${goal}/${uuidv3(url, uuidv3.URL)}`,
    subdirectories: [
      { directory: 'img', extensions: ['.jpg', '.png', '.svg'] },
      { directory: 'js', extensions: ['.js'] },
      { directory: 'css', extensions: ['.css'] },
    ],
  };

  const result = await scrape(options);

  console.log(result);
  //registerAction('afterFinish', async () => {});
}

// webScraper('https://medium.com/@appsupernova/supernova-101-react-exporter-6218adc998cc', 'goal1');

module.exports = webScraper;
