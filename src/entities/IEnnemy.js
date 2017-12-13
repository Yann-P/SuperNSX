class IEnnemy extends Phaser.Group {

	constructor(game, x, y, lives, pattern) {
		super(game);
		this.x 	 = x;
		this.y 	 = y;
		this._lives	 = lives;
		this._pattern = pattern;
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