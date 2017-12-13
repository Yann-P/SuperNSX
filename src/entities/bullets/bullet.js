class Bullet extends Phaser.Sprite{
	constructor(game, x, y, spriteName){
		super(game, x, y, spriteName);
		this.anchor.setTo(0.5);
		this._destructionOffset = 50;
        this.game.physics.arcade.enable(this);
	}

	update(){
		if(this.y < -this._destructionOffset || this.y > this.game.height+this._destructionOffset 
			|| this.x < -this._destructionOffset || this.x > this.game.width+this._destructionOffset ){
			this.destroy();
		}
	}
}