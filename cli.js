const getFile = require('./index');
const pathName = process.argv;

console.log(getFile(pathName[2]));