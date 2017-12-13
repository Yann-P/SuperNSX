class WeakEnnemyFactory extends IEnnemyFactory {

	constructor() {
		super();
	}

 
	CreateEnnemy(game, x, y, lives) {
		let enemy = new WeakEnnemy(game, x, y, lives, new SinePattern(
			0.05, game.world.camera.width/2, 0, game.world.camera.width/2
		));
		return enemy;
	}

}