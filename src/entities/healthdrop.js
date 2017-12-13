class HealthDrop extends IDrop {
    constructor(game, x, y) {
        super(game, x, y, "HealthDrop");
    }  

    upgrade(playState) {
        playState.healthUpgrade();
    }
}