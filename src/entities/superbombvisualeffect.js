class SuperBombVisualEffect extends Phaser.Group {

    constructor(game, x, y) {
        super(game)
        this._explosion = new Phaser.Sprite(
            this.game, 
            this.game.width / 2,
            this.game.height / 2,
            "Explosion01"
        );
        this._explosion.anchor.setTo(0.5)
        this._explosion.scale.setTo(7)

        this._explosion.animations.add('boom', [0, 1, 2, 3, 4]);
        this._explosion.animations.play('boom', 10, false);
        
        this._whiteScreen = new Phaser.Graphics(
            this.game,0,0
        )

        this._whiteScreen.beginFill(0xFFFFEE, 1);
        this._whiteScreen.drawRect(0, 0, this.game.width, this.game.height);
        this._whiteScreen.endFill();

        let tween = this.game.add.tween(this._whiteScreen).to( {
            alpha: 0
        }, 500, "Linear", true);

        tween.onComplete.add(() => {
            this.destroy();
        })

        let sound = this.game.add.audio('Explosion');
        sound.play();
        
        this.add(this._whiteScreen)
        this.add(this._explosion)
    }



}