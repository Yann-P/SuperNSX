class WeakEnnemyFactory extends IEnnemyFactory {

	constructor() {
		super();
	}

 
	CreateEnnemy(game, x, y, lives) {
		let enemy = new WeakEnnemy(game, x, y, lives, new SinePattern(
			0.05, 500, 0

		));
		return enemy;
	}

}