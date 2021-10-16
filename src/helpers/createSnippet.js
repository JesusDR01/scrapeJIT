const fs = require("fs");
const clipboardy = require("clipboardy");
const { dirs } = require("./getDirs");

const mainDir = dirs.mainDir;
const secondaryDirs = dirs.secondaryDirs;

let createSnippet = async (snippetName, snippetContent) => {
    createFolderPaths();
    if (!snippetContent) {
        snippetContent = clipboardy.readSync();
    }
    createFiles(snippetName, snippetContent);
};

const createFolderPaths = () => {

    if (!fs.existsSync(mainDir)) {
        fs.mkdirSync(mainDir);
    }

    secondaryDirs.forEach((dir) => {
        let dirPaths = `${mainDir}/${dir}`;
        if (!fs.existsSync(dirPaths)) {
            fs.mkdirSync(dirPaths);
        }
    });

};

const createFiles = (snippetName, snippetContent) =>{
    const createPath = (secondaryDir, snippetName) => `${mainDir}/${secondaryDir}/${snippetName}`;
    let secondaryPaths = secondaryDirs.map(secondaryDir => createPath(secondaryDir,snippetName));
    const [vbsFile, commandFile, dataFile] = secondaryPaths;
    createVbsFile(vbsFile,'.vbs',snippetName);
    createCommandFile(commandFile,'.bat',snippetName);
    createDataFile(dataFile,'.txt',snippetContent);
}

const createVbsFile = (path,ext,snippetName) =>{
    let content = `set objshell = createobject("wscript.shell")
    objshell.run "${mainDir}\\commands\\${snippetName}.bat",vbhide`;
    fs.writeFileSync(path.concat(ext),content);
}

const createCommandFile = (path,ext,snippetName) =>{
    let content = `clip < "${mainDir}/data/${snippetName}.txt"`;
    fs.writeFileSync(path.concat(ext),content);
}

const createDataFile = (path,ext,snippetContent) =>{
    fs.writeFileSync(path.concat(ext),snippetContent,"utf16le");
}


module.exports = {
    createSnippet,
};
