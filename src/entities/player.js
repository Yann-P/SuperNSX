class Player extends Phaser.Sprite {

    constructor(game, x, y, enemies) {
        super(game, x, y, "Spaceship");

        this._speed = 4;
        this.game = game;
        this._bombs = new SuperBombs(enemies);
        
        this.anchor.setTo(0.5);
        this.game.add.existing(this);
        this.game.physics.arcade.enable(this);
        this.emitter = new EventEmitter;

        this._joystickPosition = "";

        let fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        fireButton.onDown.add(this.launchBomb, this); 
    }

    setJoystick(v) {
        console.log(v)
        this._joystickPosition = v;
    }

    launchBomb(){
        if (this._bombs.canLaunch()) {
            this._bombs.launch();
            this.emitter.emit('superbomb')
        }
    }

    die(callback) {
        this.kill();
        let explosion = new DeathVisualEffect(this.game,this.x, this.y, 10, callback);
    }

    update() {
        let keyboard = this.game.input.keyboard;

        if (this._joystickPosition.indexOf('t') != -1 || keyboard.isDown(Phaser.KeyCode.UP)) {
            if (this.y - this.height/2 > 0)
                this.y -= this._speed;
        }
        
        if (this._joystickPosition.indexOf('b') != -1 || keyboard.isDown(Phaser.KeyCode.DOWN)) {
            if (this.y + this.height/2 < this.game.world.camera.height)
                this.y += this._speed;
        }

        if (this._joystickPosition.indexOf('l') != -1 || keyboard.isDown(Phaser.KeyCode.LEFT)) {
            if (this.x - this.width/2 > 0)
                this.x -= this._speed;
        }

        if (this._joystickPosition.indexOf('r') != -1 || keyboard.isDown(Phaser.KeyCode.RIGHT)) {
            if (this.x + this.width/2 < this.game.world.camera.width)
                this.x += this._speed;
        }

    }
}