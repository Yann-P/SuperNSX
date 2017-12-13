class BasicGunShot extends Bullet{
	constructor(game,x,y){
		super(game, x, y, "BasicGunShot");
		this._verticalSpeed = 4;
		this.angle = 90;
	}

	update(){
		super.update();
		this.y -= this._verticalSpeed;
	}
}