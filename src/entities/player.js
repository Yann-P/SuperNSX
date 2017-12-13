

class Player extends Phaser.Sprite {

    constructor(game, x, y) {
        super(game, x, y, "Spaceship");

        this._speed = 4;
        this.game = game;
        this._bombs = new SuperBombs(this.game);
        
        this.anchor.setTo(0.5);
        this.game.add.existing(this);
        this.game.physics.arcade.enable(this);
        this.emitter = new EventEmitter;

        let fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        fireButton.onDown.add(this.launchBomb, this); 
    }

    launchBomb(){
        if (this._bombs.canLaunch()) {
            this._bombs.launch();
            this.emitter.emit('superbomb')
        }
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