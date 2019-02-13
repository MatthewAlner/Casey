import * as log4js from 'log4js';

export class Logger {
    private static _instance: Logger;
    public log = log4js.getLogger();

    private constructor() {
        this.log.level = 'info';
        this.log.info('Instantiated logger');
    }

    public static get Instance(): Logger {
        return this._instance || (this._instance = new this());
    }
}
