import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://example.com/');

  const urls = await page.$$eval('a', (anchors) =>
    anchors.map((anchor) => anchor.href).filter((href) => href.startsWith('http'))
  );
  console.log(urls);

  await browser.close();
})();
