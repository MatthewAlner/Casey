#!/usr/bin/env node
import * as yargs from 'yargs'
import * as voca from 'voca';

import { getAvailableFunctions, StringFunction } from './string-function';

class Casey {

    private argv: { [x: string]: unknown; function: string; input: string; _: string[]; $0: string; };
    private availableFunc: StringFunction[];
    private funcToRun: StringFunction;
    private input: string;

    run () {
        this.availableFunc = getAvailableFunctions();
        this.parseArguments();
        const output = this.convertString(this.input, this.funcToRun);
        console.log(output);
    }

    parseArguments() {
        this.argv = yargs
            .option('function', {
                alias: 'f',
                describe: this.generateDescription(),
                type: 'string',
                demand: true,
                choices: this.availableFunc.map(func => func.alias)
            }).option('input', {
                alias: 'i',
                describe: 'provide string to transform',
                type: 'string',
                demand: true
            }).argv;
        this.funcToRun = this.getFuncToRun();
        this.input = this.argv.input;
    }

    convertString(input: string, func: StringFunction): string {
        let output: string;

        if (voca[func.methodName]) {
            output = voca[func.methodName](input);
        } else {
            throw new Error(`Can't find function ${this.argv.function}`);
        }
        return output;
    }

    generateDescription(): string {
        let desc: string[] = [];
        desc.push('choose a function to run');
        this.availableFunc.forEach(func => {
            desc.push(`${func.alias} => ${this.convertString(func.name, func)}`);
        });
        return desc.join('\n')
    }

    getFuncToRun(): StringFunction {
        let funcToRun = this.availableFunc.find(func => func.alias === this.argv.function);
        if (!funcToRun) {
            throw new Error(`Can't find function ${this.argv.function}`);
        }
        return funcToRun
    }
}

const casey = new Casey();
casey.run();
