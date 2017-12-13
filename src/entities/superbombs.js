
class SuperBombs extends Phaser.Group {
    constructor(game) {
        this.nbBombs = 2;
        this.game = game;
    }

    canLunch() { return nbBombs > 0; }
    launch() { nbBombs--; }


}