class BasicGunShot extends Bullet{
	constructor(game,x,y,verticalSpeed, horizontalSpeed){
		super(game, x, y, "BasicGunShot");
		this._verticalSpeed = verticalSpeed;
		this._horizontalSpeed = horizontalSpeed;
		this.angle = 90 + horizontalSpeed*2.7;
	}

	update(){
		super.update();
		this.y -= this._verticalSpeed;
		this.x += this._horizontalSpeed;
	}
}