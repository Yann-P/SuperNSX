class SawGunDrop extends IDrop {
    constructor(game, x, y) {
        super(game, x, y, "SawGunDrop");
    } 

    upgrade(playState) {
        playState.addSawGun();
    }
}