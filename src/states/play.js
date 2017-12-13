class PlayState extends Phaser.State {

    
    create() {
        this._ennemy = new WeakEnnemy(this.game, 100, 100);
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