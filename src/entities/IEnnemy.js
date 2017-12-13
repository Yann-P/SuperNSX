class IEnnemy extends Phaser.Sprite {

	constructor(game, x, y, key, lives, pattern) {
		super(game, x, y, key);
		this._lives	 = lives;
		this._pattern = pattern;

		this._emitter = new EventEmitter;
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

	set lives(lives) {
		this._lives = lives;
	}

	die(){
		let explosion = new DeathVisualEffect(this.game,this.x, this.y, 20);
		
		if (Math.random() < 0.1)
		{
			return {x:this.x, y:this.y};
		}

		return null;
	}
}