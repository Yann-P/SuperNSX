class GameOverState extends Phaser.State {
    
        create() {
    
            this._parallax = new Parallax(this.game, .2)
            this._parallax._bg1.tint = 0xee0000

            new SuperBombVisualEffect(this.game);
    
            let logo = this.game.add.sprite(0, 0, 'Logo');
            logo.anchor.setTo(0.5);
            logo.scale.setTo(0.7);
            logo.x = this.game.width / 2
            logo.y = 100

    
    
           

            let text = this.game.add.text(this.game.width / 2, 300, " GAME OVER... \nCLICK TO REPLAY ", { 
                font: "50px arial", 
                fill: "#ffffff", 
                align: "center",
                fontWeight: "bold"
            });
            text.anchor.setTo(0.5);
            

            
    
            
    
            let tween = this.game.add.tween(logo).to( { angle: -5 }, 5000, "Sine.easeInOut", true, 0, -1);
            let tween2 = this.game.add.tween(logo.scale).to( { x: 1, y: 1 }, 2500, "Sine.easeInOut", true, 0, -1);
            let tweenb = this.game.add.tween(text.scale).to( { x: 1.1, y: 1.1 }, 2000, "Sine.easeInOut", true, 0, -1);
            
            tween.yoyo(true, 0);
            tween2.yoyo(true, 0);
            tweenb.yoyo(true, 0);
    
    
    
            text.inputEnabled = true;
            text.events.onInputDown.add(() => {
            this.game.state.start('play');
            });
        }
    
}