class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.round((this.max - this.min) / 2 + this.min);
    }

    lower() {
        this.max = this.guess();
        return this.guess();
    }

    greater() {
        this.min = this.guess();
        return this.guess();
    }
}

module.exports = GuessingGame;
