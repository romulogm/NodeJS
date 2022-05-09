const puppeteer = require('puppeteer');

(async () => {

const browser = await puppeteer.launch({ headless: false });
const page = await browser.newPage();
await page.goto('https://lendoosclassicosluizruffato.blogspot.com');

let bookReview = document.querySelector("#post-body-2236296491671054818 > div:nth-child(2) > div:nth-child(19) > span:nth-child(1)");

const urls = await page.$$eval("#post-body-2236296491671054818 > div:nth-child(2) > div:nth-child(19) > span:nth-child(1)", (el) => {
    return el.map((a) => a.getAttribute("href"));
  });


await console.log(bookReview);
await browser.close();

})();
// "#post-body-2236296491671054818 > div:nth-child(1)"
// "document.querySelector("#post-body-2236296491671054818 > div:nth-child(2) > div:nth-child(19) > span:nth-child(1)")"
//await page.screenshot({ path: 'screenshot2.png' });

