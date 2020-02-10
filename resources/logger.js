const chalk = require('chalk');

exports.log = (content, type = 'log') => {
  if (type === 'warn') {
    return console.log(`${chalk.black.bgYellow('[WARN]')} ${content}`);
  } else if (type === 'error') {
    return console.log(`${chalk.bgRed('[ERR]')} ${content}`);
  } else if (type === 'log') {
    return console.log(`${chalk.black.bgBlue('[LOG]')} ${content}`);
  } else if (type === 'load') {
    return console.log(`${chalk.black.bgWhite('[LOAD]')} ${content}`);
  } else if (type === 'ready') {
    return console.log(`${chalk.bgGreen('[READY]')} ${content}`);
  } else {
    throw new TypeError('Incorrect logger type submitted - must be either warn, error, load, or log');
  }
};

exports.error = (...args) => this.log(...args, 'error');

exports.warn = (...args) => this.log(...args, 'warn');

exports.debug = (...args) => this.log(...args, 'debug');

exports.load = (...args) => this.log(...args, 'load');

exports.ready = (...args) => this.log(...args, 'ready');
