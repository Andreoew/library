const chalk = require('chalk');
const fs = require('fs');

function extractLinks(content) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const results = [];
  let temp;
  while ((temp = regex.exec(content)) !== null){
    results.push({ [temp[1]]: temp[2] });
  }
  return results;
}
function handleErrors(err) {
  throw new Error(chalk.red(err.code, 'Não há arquivo no caminho'));
}

async function pushFile(filename){
  const encoding = 'utf8';
  try {
    const content = await fs.promises.readFile(filename, encoding)
    console.log(extractLinks(content));
  } catch (err) {
    handleErrors(err);
  }
}

pushFile('./arquivos/texto1.md');

