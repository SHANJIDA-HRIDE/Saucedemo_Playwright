const { test, expect } = require('@playwright/test');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { MenuPage } = require('../pages/MenuPage');
const { productName } = require('../utils/testData');

test('should login, add product to cart, verify item name and logout successfully', async ({ page }) => {
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const menu = new MenuPage(page);

  await page.goto('/inventory.html');

  await inventory.addProductToCart();
  await inventory.goToCart();
  await cart.verifyProduct(productName);
  await menu.logout();

});