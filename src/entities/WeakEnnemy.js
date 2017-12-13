class WeakEnnemy extends IEnnemy {

	constructor(game, x, y) {
		super(game, x, y);
		let sprite = new Phaser.Sprite(game, x, y, 'Enemy01');
		sprite.anchor.set(0.5);
		this.add(sprite);

	}





}