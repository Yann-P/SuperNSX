class WeaponDrop extends IDrop {
    constructor(game, x, y) {
        super(game, x, y, "WeaponDrop");
    }  

    upgrade(playState) {
        playState.weaponUpgrade();
    }
}