

class Player extends Phaser.Sprite {

    constructor(game) {
        super(game, 1000, 500, "Spaceship");

        this._speed = 10;
        this.anchor.setTo(0.5);
        this.game.add.existing(this);
        this.game.physics.arcade.enable(this);
    }

    update() {
        let keyboard = this.game.input.keyboard;

        if (keyboard.isDown(Phaser.KeyCode.UP)) {
            if (this.y - this.height > 0)
                this.y -= this._speed;
        }
        
        if (keyboard.isDown(Phaser.KeyCode.DOWN)) {
            if (this.y + this.height < this.game.world.camera.height)
                this.y += this._speed;
        }

        if (keyboard.isDown(Phaser.KeyCode.LEFT)) {
            if (this.x - this.width > 0)
                this.x -= this._speed;
        }

        if (keyboard.isDown(Phaser.KeyCode.RIGHT)) {
            if (this.x + this.width < this.game.world.camera.width)
                this.x += this._speed;
        }
    }
    
}