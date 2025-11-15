# SauceDemo Playwright Automation Framework

This is a professional **UI Automation Framework** built using **Playwright** with **JavaScript**, implementing **Page Object Model (POM)**, **global login**, **test data utilities**, and **cross-browser execution**.  

It automates the scenario:  

> *A user logs in with valid credentials, adds one product to the cart, verifies the product name in the cart, and logs out.*
---

## ✅ Key Features

| Feature | Description |
|--------|------------|
| **Page Object Model (POM)** | Cleaner, maintainable code structure. |
| **Global Login** | Login is done once and session is reused across all tests. |
| **Test Data Utilities** | Centralized test data for easy maintenance. |
| **Cross-Browser Support** | Tests run on Chromium, Firefox, and WebKit. |
| **Allure Reporting** | Generates professional test reports. |
| **Headless / Headed Mode** | Tests can run visually or in headless mode. |
| **Screenshots & Videos** | Captured on failure for easier debugging. |

---

## 📁 Project Structure
```bash
saucedemo-pom/
│
├── tests/
│   └── addToCart.spec.js
│
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── MenuPage.js
│
├── utils/
│   └── testData.js
│
├── global-setup.js
├── playwright.config.js

```

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/SHANJIDA-HRIDE/Saucedemo_Playwright.git
cd saucedemo-playwright
```
### 2. Install dependencies
```bash
npm install
```
### 3. Install Playwright browsers
```bash
npm init playwright@latest
```

## ▶️ Running Tests
### Run all tests
```bash
npx playwright test
```

### Run in headed mode (see browser)
```bash
npm run test:headed
```

### Run a single browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## 📊 Test Reports
### Playwright HTML Report
```bash
npx playwright show-report
```
### Allure Report
#### Generate Report
```bash
npm run allure:generate
```
#### Open Report
```bash
npm run allure:open
```

##### 📌 Notes for Assessors

- The project uses global login, so tests do not require repeated authentication.

- All tests are stable and run without setup errors.

 - The project is ready to clone and run immediately.

## ✨ Author
### Shanjida Hride
### 🧑‍💻 Software QA Engineer | Playwright | API | Manual & Automation Testing
<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="mailto:shanjidahride1997@gmail.com"><img src="https://img.shields.io/badge/Gmail-lightgrey?style=flat&logo=gmail"/></a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://www.linkedin.com/in/shanjida-hride-b38222173/"><img src="https://img.shields.io/badge/Linkedin-0077b5?style=flat&logo=linkedin"/></a>&nbsp;&nbsp;&nbsp;&nbsp;
</p>
