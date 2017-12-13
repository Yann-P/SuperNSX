class IEnnemy extends Phaser.Group {

	constructor(game, x, y, speedX, speedY, lives) {
		super(game);
		this._x 	 = x;
		this._y 	 = y;
		this._speedX = speedX;
		this._speedY = speedY;
		this._lives	 = lives;

	}


	get x() {
		return this._x;
	}

	set x(X) {
		this._x = X;
	}

	get y() {
		return this._y;
	}

	set y(Y) {
		this._y = Y;
	}



	get speedX() {
		return this._speedX;
	}

	set speedX(SpeedX) {
		this._speedX = SpeedX;
	}

	get speedY() {
		return this._speedY;
	}

	set speedY(SpeedY) {
		this._speedY = SpeedY;
	}


	get lives() {
		return this._lives;
	}

	set lives(Lives) {
		this._lives = Lives;
	}





}