const { chromium } = require('playwright-chromium');
const assert = require('chai').assert;

let browser, page;

describe('Test login button', function () {
    this.timeout(10000);

    before(async () => {
        browser = await chromium.launch();
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        await page.close();
    });

    it('Should redirect page and show form with title "Вход за потребители"', async () => {

        await page.goto('https://softuni.bg/');

        await page.click('a[href="/login"]');

        let heading = await page.textContent('div.login-container h3');

        assert.equal(heading.trim(), 'Вход за потребители');

    })
})