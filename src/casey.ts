#!/usr/bin/env node
import * as yargs from 'yargs'

const argv = yargs.option('size', {
    alias: 's',
    describe: 'choose a size',
    choices: ['xs', 's', 'm', 'l', 'xl']
}).argv;

console.log("hello");
console.log("size: ", argv.size);
