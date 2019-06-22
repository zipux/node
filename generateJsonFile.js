const fs = require('fs');

function generateFile(filename, data) {
  fs.writeFile(filename, JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log(`The file '${filename}' has been saved!`);
  });
}
module.exports.saveFile = generateFile;