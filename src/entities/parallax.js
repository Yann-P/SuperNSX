class Parallax extends Phaser.Group {
    constructor(game, speed) {
        super(game)
        this._speed = speed;
        this._bg1 = this.game.add.tileSprite(0, 0, 640, 480, 'Background01');
        this._bg2 = this.game.add.tileSprite(0, 0, 640, 480, 'Background02');
        this._bg1.width = this._bg2.width = this.game.width;
        this._bg1.height = this._bg2.height =  this.game.height;
    }

    setSpeed(s) {
        this._speed = s;
    }

    update() {
        this._bg1.tilePosition.y += this._speed * 2;
        this._bg2.tilePosition.y += this._speed;
    }
}