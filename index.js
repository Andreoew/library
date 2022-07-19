const chalk = require('chalk');
const fs = require('fs');

function extractLinks(content) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const results = [];
  let temp;
  while ((temp = regex.exec(content)) !== null){
    results.push({ [temp[1]]: temp[2] });
  }
  return results.length === 0 ? 'Não há links' : results;
}
function handleErrors(err) {
  throw new Error(chalk.red(err.code, 'Não há arquivo no caminho'));
}

async function getFile(filename){
  const encoding = 'utf8';
  try {
    const content = await fs.promises.readFile(filename, encoding)
    return extractLinks(content);
  } catch (err) {
    handleErrors(err);
  }
}

module.exports =  getFile;