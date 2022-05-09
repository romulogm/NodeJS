// Acessar página individual do post, raspar e salvar dados, ir para a próxima página

const puppeteer = require('puppeteer');

(async () => {

const browser = await puppeteer.launch({ headless: false });
const page = await browser.newPage();
await page.goto('https://lendoosclassicosluizruffato.blogspot.com');
//
await page.waitForSelector("p:nth-child(1) > span");

const title = await page.$eval(document.querySelector("p:nth-child(1) > span"), (title) => title.innerText); 

const image = await page.$eval("div.separator > a > img", (image) =>
      image.getAttribute("src")
    );

const content = await page.$eval("span > p:nth-child(1) > span", el => el.innerText);     


const post = {
    title, 
    image, 
    content
  };

posts.push(post)

/*
let haveNext = false;

do {
  haveNext = false; 

  const button_next_page = await page.$("#Blog1_blog-pager-older-link"); 

  if (button_next_page) {
    await Promise.all(
      [
        page.waitForNavigation(),  
        page.$eval("#Blog1_blog-pager-older-link", e => e.click()) 
      ]
    );
    haveNext = true; 
  }
} while (haveNext);

await browser.close();
*/
})();

// "#post-body-2236296491671054818 > div:nth-child(1)"
// "document.querySelector("#post-body-2236296491671054818 > div:nth-child(2) > div:nth-child(19) > span:nth-child(1)")"

//http://www2.decom.ufop.br/terralab/tutorial-como-realizar-um-scraping-de-dados-em-um-website/
