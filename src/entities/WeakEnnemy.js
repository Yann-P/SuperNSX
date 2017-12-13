class WeakEnnemy extends IEnnemy {

	constructor(game, x, y, lives, pattern) {
		super(game, x, y, 'Enemy01', lives, pattern);
		this.anchor.set(0.5);
		this.angle = -90;

	}
}