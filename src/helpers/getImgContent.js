const Tesseract = require('tesseract.js');
const clipboardy = require("clipboardy");

const getImgContent = (imgUrl) =>{
    Tesseract.recognize(
        imgUrl,
        'eng+spa',
        { logger: m => console.log(m) }
      ).then(({ data: { text } }) => {
        clipboardy.writeSync(text);
      })
};

module.exports = ({
    getImgContent
})