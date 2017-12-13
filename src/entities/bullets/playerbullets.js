class PlayerBullets extends Phaser.Group{
	constructor(game, shootEmitter){
		super(game);
		this._shootEmitter = shootEmitter;
        this.game.physics.arcade.enable(this);
		this._shootEmitter.on("shoot", (bullet) => {
			this.add(bullet);
			bullet.events.onDestroy.add(()=>{
				this.remove(bullet);
			})
		})
	}
}