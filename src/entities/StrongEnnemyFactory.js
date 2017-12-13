class StrongEnnemyFactory extends IEnnemyFactory {

	constructor() {
		super();
	}

 
	CreateEnnemy(game, x, y, lives) {
		let enemy = new StrongEnnemy(game, x, y, lives, new SinePattern(
			0.03, 300, 0

		));
		return enemy;
	}

}