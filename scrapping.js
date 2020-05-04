const puppeteer = require("puppeteer");

async function scrappingThis() {
  console.log("Launching the navigator...");
  const browser = await puppeteer.launch({ headless: false });

  // Working with the navigator
  const page = await browser.newPage();
  await page.goto('https://es.wikipedia.org/wiki/node.js');
  const title1 = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      return h1.innerHTML;
  });

  // We obtained the h1 tag of that url!
  console.log(title1);
  console.log("Closing the navigator...");
  browser.close();
  console.log("Navigator closed!");
}

module.exports = { scrappingThis };
