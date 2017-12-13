class WeakEnnemyFactory extends IEnnemyFactory {

	constructor() {
		super();
	}

	CreateEnnemy(game, x, y, speedX, speedY, lives) {
		return new WeakEnnemy(game, x, y, speedX, speedY, lives);
	}

}