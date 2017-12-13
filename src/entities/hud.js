class HudSuperBombs extends Phaser.Group {
    constructor(game, x, y, player) {
        super(game);
        this.x = x;
        this.y = y;
        this.player = player;
        this.game = game;
        this.bombLaunched();
    }

    bombLaunched() {
        this.removeAll(true);            
        for (let i=0; i<this.player._bombs.nbBombs; i++)
        {   
            this.sprite = new Phaser.Sprite(game, -40*i,0,"Bomb");
            this.sprite.width = 45;
            this.sprite.height = 45;
            this.sprite.anchor.setTo(1,0);

            this.add(this.sprite);            
        } 
    }

}

class HudHealth extends Phaser.Group {
    constructor(game, x, y, health) {
        super(game)
        this.x =x;
        this.y =y;
        this.health = health;
        this.game =game;

        this.setHealth(this.health);

    }
    
    setHealth(health) {

        this.removeAll(true);            
        for (let i=0; i<health; i++)
        {   
            this.sprite = new Phaser.Sprite(game, 40*i,0,"Heart");
            this.sprite.scale.setTo(2.5);            
            this.add(this.sprite);            
        }   
    }

}

class HudScore extends Phaser.Group {
    constructor(game, x, y, score, emitter) {
        super(game);
        this.x = x;
        this.y = y;
        this.game = game;
        this.text = new Phaser.Text(this.game, 0,0, "" + score, {
            font: "40px arial",
            fill: "#ffffff",
            align: "center"
        });
        this.text.anchor.setTo(1,0);
        this.add(this.text);

        this._emitter = emitter;
        this._emitter.on("updateScore", (score) => {
            this.text.text = "" + score;
        });

    }
}