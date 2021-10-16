const bent = require("bent");
let request = bent("POST");
const cheerio = require("cheerio");
const clipboardy = require("clipboardy");
const { convert: convertToText } = require("html-to-text");

let scrapeJIT = async (url, selector, cookies, body) => {
    let text = "";

    try {
        let headers = cookies && { Cookie: cookies };

        const $ = await getHtml(url, body, headers);

        text = $(selector)
            .toArray()
            .map((el) => $(el).html())
            .map(convertToText)
            .join("\n");

        clipboardy.writeSync(text);
    } catch (err) {
        
        clipboardy.writeSync(err.message);
    }

    return text;
};

async function getHtml(url, body, headers) {
    let html;
    if (!body) {
        request = bent("string");
        html = await request(url, body,headers);
    } else {
        html = await (await request(url, body, headers)).text();
    }
    const $ = cheerio.load(html);
    return $;
}

module.exports = {
    scrapeJIT,
};
