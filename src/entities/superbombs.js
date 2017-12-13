
class SuperBombs {
    constructor(enemies) {
        this.nbBombs = 2;
        this.enemies = enemies;
    }

    canLaunch() { 
        return this.nbBombs > 0; 
    }
    
    
    launch() { 
        this.nbBombs--; 
        for(let enemy of this.enemies.children){
            enemy.die();
        }
        this.enemies.removeAll(true);
    }
}