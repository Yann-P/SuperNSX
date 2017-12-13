class PlayState extends Phaser.State {
    create() {
        this._parallax = new Parallax(this.game, 1);

        this._enemies = new Enemies(this.game);

        this._drops = new Phaser.Group(this.game);

        this._player = new Player(this.game, this.game.width / 2, this.game.height - 50, this._enemies) ;
        this._player.emitter.on("superbomb", (this.bombExplosion.bind(this)));
        this._health = 2;

        this._hudBombs = new HudSuperBombs(this.game, this.game.width -50 , 50, this._player );
        this._hudHealth = new HudHealth(this.game, 50 , 50, this._health);
        this._scoreEmitter = new EventEmitter();
        this._hudScore = new HudScore(this.game, this._hudBombs.x, 100, 0, this._scoreEmitter)

        this._weakEnnemyFactory = new WeakEnnemyFactory();
        this._strongEnnemyFactory = new StrongEnnemyFactory();
        
        //this._weapon = new SawGun(this.game);
        this._weapon = new BasicGun(this.game);
        this._enemyweapon = new EnemyBasicGun(this.game, this._player);

        //this._weapon.disable(); // Uncomment if you want to test collisions
        
        this._playerBullets = new PlayerBullets(this.game, this._weapon.shootEmitter);
        this._enemyBullets = new EnemyBullets(this.game, this._enemyweapon.shootEmitter);
        

        this._music = this.game.add.audio('Level01')
        this._music.loop = true;
        //this._music.play(); // Uncomment if you don't want to keep your sanity

        this._upgradeSound = this.game.add.audio('WeaponChange');
        this._gameOverSound = this.game.add.audio('Loose');
        this._healthUp = this.game.add.audio('HealthUp');
        
        this._gameOver = false;


        this._level = new Level(this.game, this._enemies);

        this._score = 0;
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
        for(let enemy of this._enemies.children){
            this._enemyweapon.shoot(enemy.x, enemy.y);
        }
        

        this.game.physics.arcade.overlap(this._enemies, this._player, PlayState.prototype.playerDies.bind(this));
        this.game.physics.arcade.overlap(this._enemies, this._playerBullets, PlayState.prototype.enemyTouched.bind(this));
        this.game.physics.arcade.overlap(this._player, this._enemyBullets, PlayState.prototype.playerHit.bind(this));
        this.game.physics.arcade.overlap(this._drops, this._player, PlayState.prototype.playerUpgrade.bind(this));
    }

    playerUpgrade(player, drop) {
        drop.upgrade(this);
        this._drops.remove(drop);
    }

    weaponUpgrade() {
        this._weapon.upgrade();
        this._upgradeSound.play();        
    }

        
    healthUpgrade() {
        this._hudHealth.setHealth(++this._health);
        this._healthUp.play();
    }

    playerHit(player, bullet){
        this._enemyBullets.remove(bullet); 
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
            let tween = this.game.add.tween(this._player).to({angle:360},500,"Linear",true)
        }

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
        enemy.lives -= bullet._damage;

        if (! bullet._piercing)
            this._playerBullets.remove(bullet);

        if (enemy.lives <= 0) {
            let drop = enemy.die();
            this._score += enemy.score;
            this._scoreEmitter.emit("updateScore", this._score);

            if (drop != null) {
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
        }
    }

    save() {
        if(window.localStorage) {
        }
        
    }

}