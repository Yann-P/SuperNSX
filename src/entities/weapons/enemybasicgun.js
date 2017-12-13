class EnemyBasicGun extends Weapon{
	constructor(game, player){
        super(game);
        this.player = player;
		this._shootRate = 1; // Bullet per second
		this._canShoot = true;

	}

	/**
	 * Shoot from x, y
	 */
	shoot(x,y){
		if(this._canShoot && this._enabled){

            this.shootEmitter.emit("enemyshoot", new BasicEnemyShot(this.game, x, y, this.player));
            
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