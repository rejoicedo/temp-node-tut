const path = require('path')

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

const Edo = path.basename(filePath)
console.log(Edo)

const Rejoice = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(Rejoice);