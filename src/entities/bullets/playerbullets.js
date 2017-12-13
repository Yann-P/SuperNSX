class PlayerBullets extends Phaser.Group{
	constructor(game, shootEmitter){
		super(game);
		this._shootEmitter = shootEmitter;
		this._shootEmitter.on("shoot", (bullet) => {
			this.add(bullet);
			bullet.events.onDestroy.add(()=>{
				this.remove(bullet);
			})
		})
	}
}