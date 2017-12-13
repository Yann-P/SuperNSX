class SawGun extends Weapon {
	constructor(game){
		super(game);
		this._shootRate = 0.5; // Bullet per second
		this._canShoot = true;
		this._verticalSpeed = 2;
		this._upgradeLevel = 1;
		this._maxLevel = 3;
		this.initShootFunctions();
	}

	/**
	 * Shoot from x, y
	 */
	shoot(x,y){
		if(this._canShoot && this._enabled){
			this._shootFunction[this._upgradeLevel](x,y);
			this._canShoot = false;
			let timer = this.game.time.create(true);
			timer.loop(1000/this._shootRate, () => {
				this._canShoot = true;
				timer.destroy();
			});
			timer.start();
		}

	}

	initShootFunctions(){
		this._shootFunction = [];
		this._shootFunction[1] = (x,y) =>{
			this.shootEmitter.emit("shoot", new SawGunShot(this.game, x, y, this._verticalSpeed, 0, 50));
		};
		this._shootFunction[2] = (x,y) =>{
			this.shootEmitter.emit("shoot", new SawGunShot(this.game, x, y, this._verticalSpeed, 0, 70));
		};
		this._shootFunction[3] = (x,y) =>{
			this.shootEmitter.emit("shoot", new SawGunShot(this.game, x, y, this._verticalSpeed, 0, 90));
		};
	}

	upgrade(){
		if(this._upgradeLevel < this._maxLevel){
			this._upgradeLevel++;
		}
	}
}