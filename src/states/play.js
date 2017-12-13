class PlayState extends Phaser.State {

    
    create() {
        this._weapon = new BasicGun(this.game);
        this._playerBullets = new PlayerBullets(this.game, this._weapon.shootEmitter);

    }


    update() {
        //this._weapon.shoot(500,500);
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