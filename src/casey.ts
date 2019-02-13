#!/usr/bin/env node
import * as yargs from 'yargs'
import * as voca from 'voca';

import { StringFunction } from './string-function';

class Casey {

    private argv: { [x: string]: unknown; function: string; input: string; _: string[]; $0: string; };
    run () {
        this.parseArguments();
        const output = this.convertString(this.argv.input, this.argv.function);
        console.log(output);
    }

    parseArguments() {
        this.argv = yargs
            .option('function', {
                alias: 'f',
                describe: this.generateDescription(),
                type: 'string',
                demand: true,
                choices: Object.keys(StringFunction).map((k) => StringFunction[k])
            }).option('input', {
                alias: 'i',
                describe: 'provide string to transform',
                type: 'string',
                demand: true
            }).argv;
    }

    convertString(input: string, func: string): string {
        let output: string;

        switch(func) {
            case StringFunction.CAMEL_CASE: {
                output = voca.camelCase(input);
                break;
            }
            case StringFunction.KEBAB_CASE: {
                output = voca.kebabCase(input);
                break;
            }
            default: {
                throw new Error(`Can't find function ${this.argv.function}`);
            }
        }
        return output;
    }

    generateDescription(): string {
        let desc: string[] = [];
        desc.push('choose a function to run');
        Object.entries(StringFunction).forEach(func => {
            const [key, value] = func;
            desc.push(`${value} => ${this.convertString(key, value)}`);
        });
        desc.push('');
        return desc.join('\n')
    }
}

const casey = new Casey();
casey.run();
