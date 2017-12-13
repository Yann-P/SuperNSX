class Level {

	constructor(game, enemies) {
		this._game = game;
		this._enemies = enemies;
        this._weakEnnemyFactory = new WeakEnnemyFactory();
        this._strongEnnemyFactory = new StrongEnnemyFactory();
		this.timer2 = this._game.time.events.loop(Phaser.Timer.SECOND, this.spawnEnnemy, this);

	}


	spawnEnnemy() {
		if (game.rnd.between(0, 1)) {
        	this._enemies.add(this._weakEnnemyFactory.CreateEnnemy(this._game, this._game.world.camera.width/2, 0, 1));
		} else {
        	this._enemies.add(this._strongEnnemyFactory.CreateEnnemy(this._game, this._game.world.camera.width/2, 0, 5));
		}

	}	

}