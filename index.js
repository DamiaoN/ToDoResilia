import chalk from "chalk"
import readlineSync from "readline-sync"
let userName = readlineSync.question('Ola, tudo bem? Qual o seu nome?');
let oQueDeseja = readlineSync.question('Que tipo de melhorias sistemicas podemos implementar em teu negocio?');
let paraQue = readlineSync.question('Qual a necessidade destas implementacoes?');

console.log(chalk.bgRedBright(`${userName} ${oQueDeseja} ${paraQue}`));