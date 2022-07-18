const chalk = require('chalk');
const fs = require('fs');

function handleErrors(err) {
  throw new Error(chalk.red(err.code, 'Não há arquivo no caminho'));
}

async function pushFile(filename){
  const encoding = 'utf8';
  try {
    const content = await fs.promises.readFile(filename, encoding)
    console.log(chalk.green(content));
  } catch (err) {
    handleErrors(err);
  }
}

pushFile('./arquivos/texto1.md');

console.log(chalk.blue('vamos começar!'));

const paragrafo = 'Texto retornado por uma função';

function texto(string) {
  return string;
}

console.log(texto(paragrafo));
