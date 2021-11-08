const { program } = require("commander");
const { createSnippet } = require("./helpers/createSnippet");
const { deleteSnippet } = require("./helpers/deleteSnippet");
const {getImgContent} = require("./helpers/getImgContent");
const { scrapeJIT } = require("./helpers/scrapeJIT");

program
    .option("--url <type>", "Specify url")
    .option("--selector <type>", "Specify selector")
    .option("--cookies <type>", "Cookies needed to get html")
    .option("--body <type>", "Specify body request", "")
    .option("--snippetcreate <type>", "Specify name to create snippet file")
    .option("--snippetdata <type>", "Specify snippet content")
    .option("--snippetdelete <type>", "Specify snippet name to delete")
    .option("--img <type>", "Specify imgUrl to get content");

const { url, selector, cookies, body,snippetcreate, snippetdata, snippetdelete, img:imgUrl } = program.parse(process.argv).opts();
(async () => {
   
    if (url && selector){
        await scrapeJIT(url, selector, cookies, body);
    }

    if (snippetcreate){
        createSnippet(snippetcreate,snippetdata)
    }

    if (snippetdelete){
        deleteSnippet(snippetdelete)
    }
    
    if (imgUrl){
        getImgContent(imgUrl);
    }
})();
