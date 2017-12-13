class PlayState extends Phaser.State {

    
    create() {
        this._parallax = new Parallax(this.game, 1);
        this._enemies = new Phaser.Group(this.game);
        
        this._enemies = new Enemies(this.game);
        this._player = new Player(this.game, 0, 0, this._enemies) ;
        this._player.emitter.on("superbomb", (this.bombExplosion.bind(this)))
        this._hudBombs = new HudSuperBombs(this.game, this.game.width -50 , 50, this._player );
        this._hudHealth = new HudHealth(this.game, 50 , 50);

        this._weakEnnemyFactory = new WeakEnnemyFactory();
        this._enemies.add(this._weakEnnemyFactory.CreateEnnemy(this.game, 100, 100, 0, 0, 1));
        //this._strongEnnemyFactory = new StrongEnnemyFactory();
        //this._enemies.add(this._strongEnnemyFactory.CreateEnnemy(this.game, 300, 300, 5));

        
        this._weapon = new BasicGun(this.game);
        this._playerBullets = new PlayerBullets(this.game, this._weapon.shootEmitter);

        this._music = this.game.add.audio('Level01')
        this._music.loop = true;
        this._music.play();
        this._gameOverSound = this.game.add.audio('Loose')
    }

    bombExplosion() {
        this._hudBombs.bombLaunched();
    }

    update() {
        this._weapon.shoot(this._player.x, this._player.y-20);

        this.game.physics.arcade.overlap(this._enemies, this._player, PlayState.prototype.playerDies.bind(this));
    }

    playerDies(){
        console.log("overlap bitch")
        this._weapon.disable()
        this._player.die(() => {
            this.game.destroy();
            
            if(confirm("Game Over.\nYou suck.\n\nReplay?"))
                window.location.reload();

        });
        this._gameOverSound.play();
        //this.game.destroy();
        


    }

    restore() {
        if(window.localStorage) {
            // const score = localStorage.getItem('score');
            // if(!isNaN(+score)) {
            //     this.score = +score;
            // }
        }
        
    }

    save() {
        if(window.localStorage) {
            //localStorage.setItem('score', ""+this.score);
        }
        
    }

}