
class SuperBombs extends Phaser.Group {
    constructor(game) {
        super(game);
        this.nbBombs = 2;
        this.game = game;
        this.enemies = game.enemies;
    }

    canLaunch() { return this.nbBombs > 0; }
    launch() { this.nbBombs--; }


}