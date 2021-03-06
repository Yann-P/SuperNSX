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

        // this._weapon = new BasicGun(this.game);
        this._enemyweapon = new EnemyBasicGun(this.game, this._player);

        this._unlockedWeapon = [];
        this._unlockedWeapon.push(new BasicGun(this.game)); 
        this._weapon = this._unlockedWeapon[0];
        //this._weapon.disable(); // Uncomment if you want to test collisions

        this._scoreEmitter = new EventEmitter();
        this._hudScore = new HudScore(this.game, this._hudBombs.x, 100, 0, this._scoreEmitter)

        
        this._playerBullets = new PlayerBullets(this.game, this._weapon.shootEmitter);
        this._enemyBullets = new EnemyBullets(this.game, this._enemyweapon.shootEmitter);
        

        this._music = this.game.add.audio('Level01')
        this._music.loop = true;
        this._music.play(); // Uncomment if you don't want to keep your sanity

        this._upgradeSound = this.game.add.audio('WeaponChange');
        this._gameOverSound = this.game.add.audio('Loose');
        this._healthUp = this.game.add.audio('HealthUp');
        
        this._gameOver = false;


        if(!this.game.device.desktop) {

        
            this._joystick = this.game.add.sprite(this.game.width - 200, this.game.height - 200, 'Joystick');
            this._joystick.anchor.setTo(0.5);
            this._joystick.scale.setTo(2);
            this._joystick.alpha = 0.5;
            
            
            this.game.input.addMoveCallback((pointer, x, y) => {
                this._player.setJoystick(processJoystick(x, y, this._joystick.x, this._joystick.y, 50));
            });
            this.game.input.onUp.add(() => {
                this._joystick.alpha = 0.5;
                this._player.setJoystick("")
            })
            this.game.input.onDown.add(() => {
                this._joystick.alpha = 0.1;
                this._player.setJoystick("")
            })
        }


        this._level = new Level(this.game, this._enemies);

        this._score = 0;
    }

    bombExplosion() {
        new SuperBombVisualEffect(this.game);
        this._hudBombs.bombLaunched();
    }

    update() {

        if(this._gameOver) {
            this.game.input.reset(true)
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

        let keyboard = this.game.input.keyboard;

        if (keyboard.isDown(Phaser.KeyCode.ONE)) {
            this._weapon = this._unlockedWeapon[0];
            this._playerBullets.setEmitter(this._weapon.shootEmitter)
        }

        if (keyboard.isDown(Phaser.KeyCode.TWO)) {
            if (this._unlockedWeapon.length>=2) {
                this._weapon = this._unlockedWeapon[1];
                this._playerBullets.setEmitter(this._weapon.shootEmitter)
            }
        }
        
        if (keyboard.isDown(Phaser.KeyCode.THREE)) {
            if (this._unlockedWeapon.length>=3) {
                this._weapon = this._unlockedWeapon[2];
                this._playerBullets.setEmitter(this._weapon.shootEmitter)
            }
        }
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


    addSawGun() {
        this._unlockedWeapon.push(new SawGun(this.game));
    }
    

    playerDies(player, enemy){
        enemy.die()
        this._enemies.remove(enemy, true);        
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

        // if (! bullet._piercing)
        this._playerBullets.remove(bullet);

        if (enemy.lives <= 0) {
            let drop = enemy.die();
            this._score += enemy.score;
            this._scoreEmitter.emit("updateScore", this._score);

            if (drop != null) {
                if (Math.random() < 0.9) {
                    if (this._unlockedWeapon.length==1 && Math.random() < 0.5) {
                        this._drops.add(new SawGunDrop(this.game, drop.x, drop.y));
                    } else {
                        this._drops.add(new WeaponDrop(this.game, drop.x, drop.y));
                    }
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





function processJoystick(x, y, cx, cy, o) {
	if(x > cx + o) {
		if(y > cy - o && y < cy + o) {
			return "r"
		}
		else if(y < cy - o) {
			return "tr"
		}
		else if(y > cy + o) {
			return "br"
		}
	} else if(x < cx - o) {
		if(y > cy - o && y < cy + o) {
			return "l"
		}
		else if(y < cy - o) {
			return "tl"
		}
		else if(y > cy + o) {
			return "bl"
		}
	} else if(y < cy - o) {
		if(x > cx - o && x < cx + o) {
			return "t"
		}
	} else if(y > cy + o) {
		if(x > cx - o && x < cx + o) {
			return "b"
		}
	}

	return "";
}
