class IEnnemy extends Phaser.Sprite {

	constructor(game, x, y, key, lives, pattern) {
		super(game, x, y, key);
		this._lives	 = lives;
		this._pattern = pattern;
		
		this.game.physics.arcade.enable(this);
		//this.body.collideWorldBounds = true;
	}

	update() {
		let newCoords = this._pattern.nextCoords(this.x, this.y);
		this.x = newCoords.x;
		this.y = newCoords.y;
	}


	IsDead() {
		return (this._lives <= 0);
	}

	get lives() {
		return this._lives;
	}

	set lives(Lives) {
		this._lives = Lives;
	}





}