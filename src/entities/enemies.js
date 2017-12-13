class Enemies extends Phaser.Group {
    
        constructor(game) {
            super(game);

            this.enemies = new Array();

    
        }


        addEnemy(enemy){

            this.enemies.push(enemy);

        }
    
    }