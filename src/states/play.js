class PlayState extends Phaser.State {

    
    create() {
        this._parallax = new Parallax(this.game, 1);
        this._player = new Player(this.game) ;
        this._player.emitter.on("superbomb", (this.bombExplosion.bind(this)))
        this._hudBombs = new HudSuperBombs(this.game, this.game.width -50 , 50, this._player );
        this._hudHealth = new HudHealth(this.game, 50 , 50);
        
        this._enemies = new Enemies(this.game);

        this._weakEnnemyFactory = new WeakEnnemyFactory();
        this._enemies.addEnemy(this._weakEnnemyFactory.CreateEnnemy(this.game, 100, 100, 0, 0, 1));


        
        this._weapon = new BasicGun(this.game);
        this._playerBullets = new PlayerBullets(this.game, this._weapon.shootEmitter);
    }

    bombExplosion() {
        this._hudBombs.bombLaunched();
    }

    update() {
        this._weapon.shoot(this._player.x, this._player.y-20);
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