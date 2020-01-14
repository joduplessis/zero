/**
 * Zero base class
 * @class
 * @constructor
 * @public
 */
export default class Zero {
  static instance: Zero;

  services: any = {};

  constructor() {}

  static container() {
    if (!this.instance) this.instance = new Zero()

    return this.instance
  }

  get(name: string) {
    return this.services[name]
  }

  inject(name: string, service: any) {
    this.services[name] = service
  }
}
