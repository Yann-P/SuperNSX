

class Player extends Phaser.Sprite {

    constructor(game) {
        super(game, 0, 0, "Spaceship");

        this._speed = 10;
        this.game.add.existing(this);
        this.game.physics.arcade.enable(this);
    }

    update() {
        let keyboard = this.game.input.keyboard;

        if (keyboard.isDown(Phaser.KeyCode.UP)) {
            this.y -= this._speed;
        }
        
        if (keyboard.isDown(Phaser.KeyCode.DOWN)) {
            this.y += this._speed;
        }

        if (keyboard.isDown(Phaser.KeyCode.LEFT)) {
            this.x -= this._speed;
        }

        if (keyboard.isDown(Phaser.KeyCode.RIGHT)) {
            this.x += this._speed;
        }
    }
    
}