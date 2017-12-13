class IDrop extends Phaser.Sprite {
    constructor(game, x, y, sprite) {
        super(game, x, y, sprite);

        this.width = 50;
        this.height = 50;
        this.game.add.existing(this);
		this.game.physics.arcade.enable(this);
    }
}