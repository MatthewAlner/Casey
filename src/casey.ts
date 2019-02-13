#!/usr/bin/env node
import * as yargs from 'yargs'
import * as voca from 'voca';

import { StringFunction } from './string-function';

const desc = `
choose a function to run
    cc => toCamelCase
    kc => to-kebab-case
`;

const argv = yargs
    .option('function', {
    alias: 'f',
    describe: desc,
    type: 'string',
    demand: true,
    choices: Object.keys(StringFunction).map((k) => StringFunction[k])
}).option('input', {
    alias: 'i',
    describe: 'provide string to transform',
    type: 'string',
    demand: true
}).argv;

switch(argv.function) {
    case StringFunction.CAMEL_CASE: {
        console.log(voca.camelCase(argv.input));
        break;
    }
    case StringFunction.KEBAB_CASE: {
        console.log(voca.kebabCase(argv.input));
        break;
    }
}
