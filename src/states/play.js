class PlayState extends Phaser.State {

    
    create() {
        this._parallax = new Parallax(this.game, 1);
        new Player(this.game) ;
        this._weakEnnemyFactory = new WeakEnnemyFactory();
        this._weakEnnemyFactory.CreateEnnemy(this.game, 100, 100, 0, 0, 1);
    }


    update() {
        
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