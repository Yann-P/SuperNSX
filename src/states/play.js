class PlayState extends Phaser.State {

    
    create() {
        this._parallax = new Parallax(this.game, 1);
        this._hudBombs = new Bombs(this.game, this.game.width -50 , 50);
        this._hudHealth = new Health(this.game, 50 , 50);
        
        new Player(this.game) ;

        this._weakEnnemyFactory = new WeakEnnemyFactory();
        this._weakEnnemyFactory.CreateEnnemy(this.game, 100, 100, 0, 0, 1);

        this._player = new Player(this.game) ;
        this._player.emitter.on("superbomb", (this.bombExplosion.bind(this)))
        
        this._weapon = new BasicGun(this.game);
        this._playerBullets = new PlayerBullets(this.game, this._weapon.shootEmitter);
    }

    bombExplosion() {
        console.log("boum");
    }

    update() {
        this._weapon.shoot(this._player.x, this._player.y);
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