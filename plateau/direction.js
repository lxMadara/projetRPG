class Direction {
    constructor(value) {
        this.value = value;
    }

    static get NORD() { return new Direction('NORD'); }
    static get SUD() { return new Direction('SUD'); }
    static get EST() { return new Direction('EST'); }
    static get OUEST() { return new Direction('OUEST'); }
}

module.exports = { Direction };
