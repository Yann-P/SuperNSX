class PlayState extends Phaser.State {

    
    create() {
        this._parallax = new Parallax(this.game, 1);

        this._enemies = new Enemies(this.game);

        this._drops = new Phaser.Group(this.game);
        //this._drops.add(new HealthDrop(this.game, 50, 50));

        this._player = new Player(this.game, this.game.width / 2, this.game.height - 50, this._enemies) ;
        this._player.emitter.on("superbomb", (this.bombExplosion.bind(this)));
        this._health = 2;

        this._hudBombs = new HudSuperBombs(this.game, this.game.width -50 , 50, this._player );
        this._hudHealth = new HudHealth(this.game, 50 , 50, this._health);
                
        this._unlockedWeapon = [];
        this._unlockedWeapon.push(new BasicGun(this.game)); 
        this._weapon = this._unlockedWeapon[0];
        //this._weapon.disable(); // Uncomment if you want to test collisions
        
        this._playerBullets = new PlayerBullets(this.game, this._weapon.shootEmitter);

        this._music = this.game.add.audio('Level01')
        this._music.loop = true;
        this._music.play();
        this._gameOverSound = this.game.add.audio('Loose');
        this._gameOver = false;


        this._level = new Level(this.game, this._enemies);
    }

    bombExplosion() {
        new SuperBombVisualEffect(this.game);
        this._hudBombs.bombLaunched();
    }

    update() {

        if(this._gameOver) {
            this.game.state.start('gameover');
        }

        this._weapon.shoot(this._player.x, this._player.y-20);

        this.game.physics.arcade.overlap(this._enemies, this._player, PlayState.prototype.playerDies.bind(this));
        this.game.physics.arcade.overlap(this._enemies, this._playerBullets, PlayState.prototype.enemyTouched.bind(this));
        this.game.physics.arcade.overlap(this._drops, this._player, PlayState.prototype.playerUpgrade.bind(this));

        let keyboard = this.game.input.keyboard;

        if (keyboard.isDown(Phaser.KeyCode.ONE)) {
            this._weapon = this._unlockedWeapon[0];
        }

        if (keyboard.isDown(Phaser.KeyCode.TWO)) {
            if (this._unlockedWeapon.length>=2) {
                this._weapon = this._unlockedWeapon[1];
            }
        }
        
        if (keyboard.isDown(Phaser.KeyCode.THREE)) {
            if (this._unlockedWeapon.length>=3) {
                this._weapon = this._unlockedWeapon[2];
            }
        }
    }

    playerUpgrade(player, drop) {
        drop.upgrade(this);
        this._drops.remove(drop);
    }

    weaponUpgrade() {
        this._weapon.upgrade();
    }

        
    healthUpgrade() {
        this._hudHealth.setHealth(++this._health);
    }

    playerDies(player, enemy){
        enemy.die()
        this._enemies.remove(enemy);        
        if (this._health == 0)
        {
            this._player.die(() => {

                this.game.state.start('gameover')
    
            });

            this._weapon.disable()
            
            this._gameOverSound.play();
        }
        else{
            this._health--;
            this._hudHealth.setHealth(this._health);

        }
    }

    enemyTouched(enemy, bullet){
        enemy.lives--;
        this._playerBullets.remove(bullet);
        if(enemy.lives <= 0){
            let drop = enemy.die();

            if (drop != null) {
                this.game.add.audio('WeaponChange')
                if (Math.random() < 0.9) {
                    this._drops.add(new WeaponDrop(this.game, drop.x, drop.y));
                }
                else {
                    this._drops.add(new HealthDrop(this.game, drop.x, drop.y));
                }
            }
            
            this._enemies.remove(enemy);
        }else{   
            let tween = this.game.add.tween(enemy).to({angle:360},500,"Linear",true)
        }
    }

    restore() {
        if(window.localStorage) {
            // const score = localStorage.getItem('score');
            // if(!isNaN(+score)) {
            //     this.score = +score;
            // }
        }
    }

    save() {
        if(window.localStorage) {
            //localStorage.setItem('score', ""+this.score);
        }
        
    }

}