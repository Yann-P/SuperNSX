class SawGunShot extends Bullet {
	constructor(game,x,y,verticalSpeed, horizontalSpeed, size){
		super(game, x, y, "SawGunShot");
		this._verticalSpeed = verticalSpeed;
		this._horizontalSpeed = horizontalSpeed;
		this.width = size;
		this.height = size;
		this.angle = 90 + horizontalSpeed*2.7;
		this._damage = 2;
		this._piercing = true;
		this.x0 = x;
	}



	update(){
		super.update();
		this.angle += 2*this.width / 10;
		this.y -= this._verticalSpeed;
		this.x = this.x0 + (Math.sin(this.y / 50) + 0.5) / 2 * 100;
	}
}