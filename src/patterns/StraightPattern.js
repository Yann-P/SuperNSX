class SinePattern extends APattern {

    constructor(speed) {
        super();
        this._speed = speed;
    }

    nextCoords(x, y) {
        return {x: x, y: y + this._speed}
    }

}