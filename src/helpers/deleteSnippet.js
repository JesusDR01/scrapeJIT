const fs = require("fs");
const { dirs } = require("./getDirs");

const mainDir = dirs.mainDir;
const secondaryDirs = dirs.secondaryDirs;

let deleteSnippet = (snippetName) => {
    const getPath = (secondaryDir) => `${mainDir}\\${secondaryDir}\\`;

    let secondaryPaths = secondaryDirs.map((secondaryDir) => getPath(secondaryDir, snippetName));
    
    deleteFile(secondaryPaths, snippetName);
};

module.exports = {
    deleteSnippet,
};

function deleteFile(secondaryPaths, snippetName) {
    secondaryPaths.forEach((secondaryPath) => {
        fileObjs = fs.readdirSync(secondaryPath, { withFileTypes: true });
        const fileNames = fileObjs.map(el => el.name);
        fileNames.forEach(fileName => {
            if (fileName.split('.')[0] === snippetName) {
                fs.unlinkSync(secondaryPath.concat(fileName));
            }
        });
    }, snippetName);
}

