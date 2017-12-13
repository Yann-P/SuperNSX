class BasicGunShot extends Bullet{
	constructor(game,x,y){
		super(game, x, y, "BasicGunShot");
		this._verticalSpeed = 12;
		this.angle = 90;
	}

	update(){
		super.update();
		this.y -= this._verticalSpeed;
	}
}