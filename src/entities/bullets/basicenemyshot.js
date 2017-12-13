class BasicEnemyShot extends Bullet{
	constructor(game,x,y, player){
        super(game, x, y, "BasicEnemyShot");
        this.player = player;

        let angle = Phaser.Math.angleBetween(this.x, this.y, player.x, player.y);
        this.angle = angle * Phaser.Math.RAD_TO_DEG;
        this._horizontalSpeed   +=5*Math.cos(angle);
        this._verticalSpeed     +=5*Math.sin(angle);

	}

	update(){
		super.update();
		this.y -= this._verticalSpeed;
		this.x += this._horizontalSpeed;
	}
}