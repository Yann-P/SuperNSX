class StrongEnnemyFactory extends IEnnemyFactory {

	constructor() {
		super();
	}

 
	CreateEnnemy(game, x, y, lives) {
		let enemy = new StrongEnnemy(game, x, y, lives, new SinePattern(
			0.05, 
			game.rnd.between(game.world.camera.width/5, 4*game.world.camera.width/5),
			game.rnd.between(0,2),
			game.rnd.between(game.world.camera.width/5, 4*game.world.camera.width/5),
		));
		
		return enemy;
	}

}