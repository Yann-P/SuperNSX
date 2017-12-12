class LoadState extends Phaser.State {


    preload() {
        this.game.stage.backgroundColor = '#222';
        this.loaded = false;

        // let logo = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'logo');
        // logo.anchor.setTo(0.5,0.5);
        // logo.width = logo.height = Math.min(this.game.width, this.game.height);

       

        this.interval = setInterval(LoadState.prototype.checkIfLoaded.bind(this), 500);


        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //this.game.load.image("systeme", "assets/systeme.png");
        //this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');        
        //this.game.load.spritesheet("clone", "assets/spritesheet_clonage.png", 171, 303, 7);
       
    }

    checkIfLoaded() {
        if(this.loaded) {
            clearInterval(this.interval);
            this.game.state.start('title');
        }
    }

    create() {
        this.loaded = true;
    }

}