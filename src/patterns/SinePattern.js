class SinePattern extends APattern {

    constructor(speed, amplitude, harmonics = 0) {
        super();
        this._speed = speed;
        this._amplitude = amplitude;
        this._harmonics = harmonics;
    }

    nextCoords(x, y) {
        let newX = (Math.sin(y * this._speed) + 0.5) / 2 * this._amplitude;
        let newY = y + 1;
        for(let i = 0; i < this._harmonics; i++) {
            newX += Math.sin(y * this._speed / (i + 2)) * this._amplitude / (i + 2);
        }
        return {x: newX, y: newY}
    }

}