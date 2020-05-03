const fs = require('fs').promises;
const readMe = async(path) => {
    const file = await fs.readFile(path);
    return file.toString();
}

module.exports = readMe;
