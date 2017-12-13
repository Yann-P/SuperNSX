class Level {

	constructor(game, enemies) {
		this._game 			 	  = game;
		this._enemies 			  = enemies;
        this._weakEnnemyFactory   = new WeakEnnemyFactory();
        this._strongEnnemyFactory = new StrongEnnemyFactory();

        this._enemiesPerWave	 = 15;
        this._proportionOfStrongEnemies = 0.5;
        this._time_between_spawn = Phaser.Timer.SECOND;
        this._time_between_waves = Phaser.Timer.SECOND * (this._enemiesPerWave + 4);


		this.createNewSetOfWaves();
	}

	createNewSetOfWaves() {
		let nbWaves = 5;
		for (var i=0 ; i<nbWaves ; i++) {
			this._game.time.events.add(Phaser.Timer.SECOND + this._time_between_waves*i , this.createWave, this, i); // Every 20 secs
		}
	}



	createWave(wave) {
		let nbEnemies = 10;
		for (var i=0 ; i<nbEnemies ; i++) {
		this._game.time.events.add(Phaser.Timer.SECOND * (1 + i), this.spawnEnnemy, this, nbEnemies); // Every 1 sec
		}

		switch (wave) { // Increasing difficulty given the wave
			case 1: 
				this.increaseEnemiesPerWave(); 
				break;
			case 2: 
				this.increasePropotionOfStrongEnemies(); 
				break;
			case 3: 
				this.decreaseTimeBetweenSpawn();
				break;
			case 4: 
				this.decreaseTimeBetweenWaves();
				// At the end of the 5 waves, we create a new set of 5 waves
				this._game.time.events.add(Phaser.Timer.SECOND + this._time_between_waves, this.createNewSetOfWaves, this); 
				break;
		}
	}



	spawnEnnemy(nbEnemies) {
		if (game.rnd.between(0, 100) <= this._proportionOfStrongEnemies*100) {
        	this._enemies.add(this._strongEnnemyFactory.CreateEnnemy(
        		this._game, 
        		game.rnd.between(this._game.world.camera.width/5, 4*this._game.world.camera.width/5),
        		0, 
        		1
        	));
		} else {
        	this._enemies.add(this._weakEnnemyFactory.CreateEnnemy(
        		this._game, 
        		game.rnd.between(this._game.world.camera.width/5, 4*this._game.world.camera.width/5),
        		0, 
        		2
        	));
		}
	}

	increaseEnemiesPerWave() {
		this._enemiesPerWave +=2;
	}

	increasePropotionOfStrongEnemies() {
        this._proportionOfStrongEnemies += 0.08;		
	}

	decreaseTimeBetweenSpawn() {
		if (this._time_between_spawn > 0.2) {
        	this._time_between_spawn -= 0.15*Phaser.Timer.SECOND;
		}
	}

	decreaseTimeBetweenWaves() {
		if (this._time_between_waves>1) {
			this._time_between_waves -= 0.5*Phaser.Timer.SECOND;
		}
	}
}