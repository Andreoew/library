const chalk = require('chalk');
const getFile = require('./index');
const pathName = process.argv;

async function processFile(pathName){
  const result = await getFile(pathName[2]);
  console.log(chalk.yellow('Lista de links '), result);
}

processFile(pathName);

