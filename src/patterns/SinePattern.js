class SinePattern extends APattern {

    constructor(speed, amplitude, harmonics = 0, x0) {
        super();
        this._speed = speed;
        this._amplitude = amplitude;
        this._harmonics = harmonics;
        this.x0 = x0;
    }

    nextCoords(x, y) {
        let newX = this.x0 + (Math.sin(y * this._speed) + 0.5) / 2 * this._amplitude;
        let newY = y + 1;
        for(let i = 0; i < this._harmonics; i++) {
            newX += Math.sin(y * this._speed / (i + 2)) * this._amplitude / (i + 2);
        }
        return {x: newX, y: newY}
    }

}