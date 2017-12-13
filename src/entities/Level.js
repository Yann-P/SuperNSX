class Level {

	constructor(game, enemies) {
		this._game = game;
		this._enemies = enemies;
        this._weakEnnemyFactory = new WeakEnnemyFactory();
        this._strongEnnemyFactory = new StrongEnnemyFactory();

		let nbWaves = 10;
		for (var i=0 ; i<nbWaves ; i++) {
			this._game.time.events.add(Phaser.Timer.SECOND * (1 + 20*i) , this.createWave, this); // Every 20 secs
		}
	}


	createWave() {
		let nbEnemies = 10;
		for (var i=0 ; i<nbEnemies ; i++) {
		this._game.time.events.add(Phaser.Timer.SECOND * (1 + i), this.spawnEnnemy, this, nbEnemies); // Every 1 sec
		}
	}



	spawnEnnemy(nbEnemies) {

		if (game.rnd.between(0, 1)) {
        	this._enemies.add(this._weakEnnemyFactory.CreateEnnemy(
        		this._game, 
        		game.rnd.between(this._game.world.camera.width/5, 4*this._game.world.camera.width/5),
        		0, 
        		1
        	));
		} else {
        	this._enemies.add(this._strongEnnemyFactory.CreateEnnemy(
        		this._game, 
        		game.rnd.between(this._game.world.camera.width/5, 4*this._game.world.camera.width/5),
        		0, 
        		2
        	));
		}

	}	

}