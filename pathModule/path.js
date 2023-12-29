const { log } = require("console");
const path = require("path")

console.log(path.dirname('/home/kshitij/Documents/nodeJsPractice/pathModule/path.js'))
console.log(path.extname('/home/kshitij/Documents/nodeJsPractice/pathModule/path.js'));
console.log(path.basename('/home/kshitij/Documents/nodeJsPractice/pathModule/path.js'));
console.log(path.join('/home/kshitij/Documents/nodeJsPractice/pathModule/path.js','xyz.com','abc.au'));
console.log(path.parse('/home/kshitij/Documents/nodeJsPractice/pathModule/path.js'));