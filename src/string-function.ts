export interface StringFunction {
    name: string,
    alias: string,
    methodName: string
}

export function getAvailableFunctions(): StringFunction[] {
    return [{
        name: 'To Camel Case',
        alias: 'cc',
        methodName: 'camelCase'
    },{
        name: 'To Capitalised',
        alias: 'c',
        methodName: 'capitalize'
    },{
        name: 'To Decapitalised',
        alias: 'd',
        methodName: 'decapitalize'
    },{
        name: 'To Kebab Case',
        alias: 'kc',
        methodName: 'kebabCase'
    },{
        name: 'To Lower Case',
        alias: 'lc',
        methodName: 'lowerCase'
    },{
        name: 'To Snake Case',
        alias: 'sc',
        methodName: 'snakeCase'
    },{
        name: 'To Swap Case',
        alias: 'swc',
        methodName: 'swapCase'
    },{
        name: 'To Title Case',
        alias: 'tc',
        methodName: 'titleCase'
    },{
        name: 'To Upper Case',
        alias: 'uc',
        methodName: 'upperCase'
    }]
}
