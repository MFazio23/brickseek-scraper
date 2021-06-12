const puppeteer = require('puppeteer');
const {loadPage} = require('./page-loader');

const runScraper = async () => {
    console.log("Starting runScraper()")

    const browser = await puppeteer.launch({
        args: ['--no-sandbox']
    });

    const page = await browser.newPage();

    await loadPage(browser, page);

    console.log("Finishing runScraper()")

    return {};
}

module.exports = {
    brickseekScraper: async(req, res) => {
        const result = await runScraper();

        res.status(200).send(result);
    },
    runScraper
}