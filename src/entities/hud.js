class HudSuperBombs extends Phaser.Group {
    constructor(game, x, y, player) {
        super(game);
        this.x = x;
        this.y = y;
        this.player = player;
        this.game = game;
        this.text = new Phaser.Text(this.game, 0,0, "Super Bombs: " + this.player._bombs.nbBombs, {
            font: "40px arial",
            fill: "#ffffff",
            align: "center"
        });

        this.text.anchor.setTo(1,0);
        this.add(this.text);
    }

    bombLaunched() {
        this.text.text = "Super Bombs: " + this.player._bombs.nbBombs;
    }

}

class HudHealth extends Phaser.Group {
    constructor(game, x, y) {
        super(game)
        this.x =x;
        this.y =y;
        this.health = 1;
        this.game =game;
        this.text = new Phaser.Text(this.game, 0,0, "HP: " + this.health, {
            font: "40px arial",
            fill: "#ffffff",
            align: "center"
        });

        this.text.anchor.setTo(0);
        this.add(this.text);
    }

}