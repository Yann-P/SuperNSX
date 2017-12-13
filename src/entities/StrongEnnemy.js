class StrongEnnemy extends IEnnemy {

	constructor(game, x, y, lives, pattern) {
		super(game, x, y, 'Enemy02', lives, pattern);
		this.anchor.set(0.5);
	}

}