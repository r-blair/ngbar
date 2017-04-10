export class ASwitch {
    constructor (public state = 'inactive') {};
    toggle() {this.state = (this.state === 'active' ? 'inactive' : 'active'); };
}
