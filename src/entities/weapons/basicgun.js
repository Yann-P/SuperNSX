class BasicGun extends Weapon{
	constructor(game){
		super(game);
		this._shootRate = 5; // Bullet per second
		this._canShoot = true;
	}

	/**
	 * Shoot from x, y
	 */
	shoot(x,y){
		if(this._canShoot){
			this.shootEmitter.emit("shoot", new BasicGunShot(this.game, x, y));
			this._canShoot = false;
			let timer = this.game.time.create(true);
			timer.loop(1000/this._shootRate, () => {
				this._canShoot = true;
				timer.destroy();
			});
			timer.start();
		}

	}
}