const chalk = require('chalk');
const fs = require('fs');

function pushFile(filenamepath){
  const encoding= 'utf8';
  fs.readFile(filenamepath, encoding, (_, data)=> {
    console.log(chalk.green(data));
  })
}

pushFile('./arquivos/texto1.md');

console.log(chalk.blue('vamos começar!'));

const paragrafo = 'Texto retornado por uma função';

function texto(string) {
  return string;
}

console.log(texto(paragrafo));
