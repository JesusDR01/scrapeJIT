const dirs = {
    mainDir: process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'].concat('/snippets'),
    secondaryDirs: ["clipper", "commands", "data"],
};

module.exports = {
    dirs,
};
