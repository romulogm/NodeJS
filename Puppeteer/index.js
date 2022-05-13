// Acessar página individual do post, raspar e salvar dados, ir para a próxima página

const puppeteer = require('puppeteer');

(async () => {

const browser = await puppeteer.launch({ headless: false });
const page = await browser.newPage();
await page.goto('http://lendoosclassicosluizruffato.blogspot.com/2021/11/o-amigo-perdido-hella-haasse-1918-2011.html');

const reviewPost = {
  "title": ,
  "content": ,
  "avaliation": ,
  "author": ,
  "translation": ,
  "edition":
};

//CONTENT
const title = await page.$("span > p:nth-child(1) > span");
const text = await page.evaluate(title => title.textContent, title); //or const text = await (await title.getProperty('textContent')).jsonValue();

//TITLE

//AVALIATION 

//FRONT COVER IMG

//AUTHOR

//TRANSLATION

//EDITION DATA


console.log(text);
await browser.close();

})();


/*
const image = await page.$eval("div.separator > a > img", (image) =>
      image.getAttribute("src")
    );

const content = await page.$eval("span > p:nth-child(1) > span", el => el.innerText);     


const post = {
    title, 
    image, 
    content
  };

posts.push(post);
console.log(post);
*/
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
*/