class BasicGun extends Weapon{
	constructor(game){
		super(game);
		this._shootRate = 5; // Bullet per second
		this._canShoot = true;
		this._verticalSpeed = 12;
		this._upgradeLevel = 1;
		
		this._shootFunction = (x,y) =>{
			this.shootEmitter.emit("shoot", new BasicGunShot(this.game, x, y, this._verticalSpeed, 0));
		};
	}

	/**
	 * Shoot from x, y
	 */
	shoot(x,y){
		if(this._canShoot && this._enabled){
			this._shootFunction(x,y);
			this._canShoot = false;
			let timer = this.game.time.create(true);
			timer.loop(1000/this._shootRate, () => {
				this._canShoot = true;
				timer.destroy();
			});
			timer.start();
		}

	}

	upgradeWeapon(){
		if(this._upgradeLevel == 1){
			this._upgradeLevel++;
			this._shootFunction = (x,y) =>{
				this.shootEmitter.emit("shoot", new BasicGunShot(this.game, x, y, this._verticalSpeed, 0));
				this.shootEmitter.emit("shoot", new BasicGunShot(this.game, x-17, y+20, this._verticalSpeed, -10));
				this.shootEmitter.emit("shoot", new BasicGunShot(this.game, x+17, y+20, this._verticalSpeed, 10));
			}
		}
	}
}