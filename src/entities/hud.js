class HudSuperBombs extends Phaser.Group {
    constructor(game, x, y) {
        super(game)
        this.nbBombs = 2;
        this.text = new Phaser.Text(game, x,y, "Super Bombs: " + this.nbBombs, {
            font: "40px arial",
            fill: "#ffffff",
            align: "center"
        });

        this.text.anchor.setTo(1,0);
        this.add(this.text);
    }

    bombLaunched() {
        this.nbBombs--;
        this.text = new Phaser.Text(game, x, y, "Super Bombs: " + this.nbBombs, {
            font: "40px arial",
            fill: "#ffffff",
            align: "center"
        });
    }

}

class Health extends Phaser.Group {
    constructor(game, x, y) {
        super(game)
        this.health = 1;
        this.text = new Phaser.Text(game, x,y, "HP: " + this.health, {
            font: "40px arial",
            fill: "#ffffff",
            align: "center"
        });

        this.text.anchor.setTo(0);
        this.add(this.text);
    }

}