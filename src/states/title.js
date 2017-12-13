class TitleState extends Phaser.State {
    
        create() {
    
            this._parallax = new Parallax(this.game, 2)
        
    
            let logo = this.game.add.sprite(0, 0, 'Logo');
            logo.anchor.setTo(0.5);
            logo.scale.setTo(0.7);
            logo.x = this.game.width / 2
            logo.y = 100

            this.spaceship = this.game.add.sprite(0, 0, 'Spaceship');
            this.spaceship.anchor.setTo(0.5);
            this.spaceship.scale.setTo(3);
            this.spaceship.x = -50
            this.spaceship.y = 500
            this.spaceship.angle = 90;
    
    
           

            let text = this.game.add.text(this.game.width / 2, 300, " PLAY ", { 
                font: "50px arial", 
                fill: "#ffffff", 
                align: "center",
                fontWeight: "bold"
            });
            text.anchor.setTo(0.5);

            
    
            
    
            let tween = this.game.add.tween(logo).to( { angle: -5 }, 5000, "Sine.easeInOut", true, 0, -1);
            let tween2 = this.game.add.tween(logo.scale).to( { x: 1, y: 1 }, 2500, "Sine.easeInOut", true, 0, -1);
            let tweenb = this.game.add.tween(text.scale).to( { x: 1.5, y: 1.5 }, 2000, "Sine.easeInOut", true, 0, -1);
            
            tween.yoyo(true, 0);
            tween2.yoyo(true, 0);
            tweenb.yoyo(true, 0);
    
    
            let credits = this.game.add.text(20, this.game.height - 20, "Code : V. Duplessis, B. Houx, P. Gabon, J. Lepasquier, Y. Pellegrini \nENSICAEN\nMade with PhaserJS", { 
                font: "17px arial", 
                fill: "#cccccc", 
                align: "left"
            });
            credits.anchor.setTo(0, 1);
    
    
            text.inputEnabled = true;
            text.events.onInputDown.add(() => {
            this.game.state.start('play');
            });
        }

        update() {
            this.spaceship.x+=3;
            this.spaceship.x %= this.game.width * 2
        }
    
}