class SawGunShot extends Bullet {
	constructor(game,x,y,verticalSpeed, horizontalSpeed){
		super(game, x, y, "SawGunShot");
		this._verticalSpeed = verticalSpeed;
		this._horizontalSpeed = horizontalSpeed;
		this.width = 50;
		this.height = 50;
		this.angle = 90 + horizontalSpeed*2.7;
		this._damage = 1;
		this._piercing = true;
	}

	update(){
		super.update();
		this.angle += 5;
		this.y -= this._verticalSpeed;
		this.x += this._horizontalSpeed;
	}
}