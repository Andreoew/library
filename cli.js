const chalk = require('chalk');
const getFile = require('./index');
const pathName = process.argv;
const handleValidationsUrls = require('./http-validation');

async function processContent(pathName) {
  const result = await getFile(pathName[2]);
  if (pathName[3] === 'validation') {
    console.log(chalk.yellow('links valided'), handleValidationsUrls(result));
  } else {
    console.log(chalk.yellow('Lista de links '), result);
  }
}

processContent(pathName);

