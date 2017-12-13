class PlayState extends Phaser.State {

    
    create() {
        this._parallax = new Parallax(this.game, 1);
        this._hudBombs = new Bombs(this.game, this.game.width -50 , 50);
        this._hudHealth = new Health(this.game, 50 , 50);
        
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