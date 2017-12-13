class StrongEnnemy extends IEnnemy {

	constructor(game, x, y, lives, pattern) {
		super(game, x, y, lives, pattern);
		let sprite = new Phaser.Sprite(game, 0, 0, 'Enemy02');
		sprite.anchor.set(0.5);
		this.add(sprite);

	}


}