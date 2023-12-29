const chalk = require("chalk");
const validator = require("validator")


console.log(chalk.red("hello World red"));
console.log(chalk.blue.bold.italic("hello World blue"));
console.log(chalk.blue.bold.italic.inverse("hello World blue"));

const res = validator.isEmail("computer@comp.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));