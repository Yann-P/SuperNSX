class LoadState extends Phaser.State {


    preload() {
        this.game.stage.backgroundColor = '#222';
        this.loaded = false;

        // let logo = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'logo');
        // logo.anchor.setTo(0.5,0.5);
        // logo.width = logo.height = Math.min(this.game.width, this.game.height);

       

        this.interval = setInterval(LoadState.prototype.checkIfLoaded.bind(this), 500);


        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.load.image("WeaponDrop", "assets/graphics/WeaponDrop.png")
        this.game.load.image("HealthDrop", "assets/graphics/HealthDrop.png")
        this.game.load.image("Background01", "assets/graphics/Background01.png");
        this.game.load.image("Background02", "assets/graphics/Background02.png");
        for(let i = 1; i <= 3; i++)
            this.game.load.image("Bullet0" + i, "assets/graphics/Bullet0" + i + ".png");
        for(let i = 1; i <= 3; i++)
            this.game.load.image("Enemy0" + i, "assets/graphics/Enemy0" + i + ".png");
        
        this.game.load.image("Spaceship", "assets/graphics/Spaceship.png");
        this.game.load.image("Spaceship01", "assets/graphics/Spaceship01.png");
        this.game.load.image("Spaceship02", "assets/graphics/Spaceship02.png");
        this.game.load.image("BasicGunShot", "assets/graphics/Bullet01.png");
        this.game.load.image("Logo", "assets/graphics/SuperNSX-logo.png");
        this.game.load.image("Heart", "assets/graphics/heart.png");
        

        this.game.load.audio('Explosion', [ 'assets/audio/fx/Explosion.mp3', 'assets/audio/fx/Explosion.ogg' ]);
        this.game.load.audio('Loose', [ 'assets/audio/fx/Loose.mp3', 'assets/audio/fx/Loose.ogg' ]);
        this.game.load.audio('WeaponChange', [ 'assets/audio/fx/WeaponChange.mp3', 'assets/audio/fx/WeaponChange.ogg' ]);
        this.game.load.audio('Level01', [ 'assets/audio/music/Level01.mp3', 'assets/audio/music/Level01.ogg' ]);
        this.game.load.audio('Level02', [ 'assets/audio/music/Level02.mp3', 'assets/audio/music/Level02.ogg' ]);
        
        //this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');        
        this.game.load.spritesheet("Explosion01", "assets/graphics/Explosion01.png", 64, 64, 5);      
        this.game.load.spritesheet("PlayerExplosion", "assets/graphics/PlayerExplosion.png", 128, 128, 16);
       
    }

    checkIfLoaded() {
        if(this.loaded) {
            clearInterval(this.interval);
            this.game.state.start('play');
        }
    }

    create() {
        this.loaded = true;
    }

}