class Bombs extends Phaser.Group {
    constructor(game, x, y) {
        super(game)
        this.nbBombs = 2;
        this.text = new Phaser.Text(game, x,y, "Super Bombs: " + this.nbBombs, {
            font: "40px arial",
            fill: "#ffffff",
            align: "center"
        });

        this.text.anchor.setTo(1);
        this.add(this.text);
    }

}

