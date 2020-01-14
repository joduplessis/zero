/**
 * Zero base class
 * @class
 * @constructor
 * @public
 */
export default class Zero {
    static instance: Zero;
    services: any;
    constructor();
    static container(): Zero;
    get(name: string): any;
    inject(name: string, service: any): void;
}
