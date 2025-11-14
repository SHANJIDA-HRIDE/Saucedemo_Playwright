const { chromium, firefox, webkit } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');
const { validUser } = require('./utils/testData');

async function loginAndSaveState(browserType, stateFile) {
  const browser = await browserType.launch();
  const page = await browser.newPage();
  const loginPage = new LoginPage(page);

  await page.goto("https://www.saucedemo.com/");
  await loginPage.login(validUser.username, validUser.password);
  await page.waitForURL('**/inventory.html');

  await page.context().storageState({ path: stateFile });
  await browser.close();
}

module.exports = async () => {
  await loginAndSaveState(chromium, 'storageState.chromium.json');
  await loginAndSaveState(firefox, 'storageState.firefox.json');
  await loginAndSaveState(webkit, 'storageState.webkit.json');
};
