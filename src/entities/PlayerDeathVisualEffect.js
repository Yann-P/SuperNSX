class PlayerDeathVisualEffect extends Phaser.Group {

    constructor(game, x, y) {
        super(game)
        this._explosion = new Phaser.Sprite(this.game, x, y, "PlayerExplosion");
        this._explosion.anchor.setTo(0.5)

        this._explosion.animations.add('kaboom', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
        this._explosion.animations.play('kaboom', 10, false);
    
        this.add(this._explosion)
    }



}