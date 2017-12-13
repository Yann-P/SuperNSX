class Weapon{
	constructor(game){
		this.game = game;
		this.shootEmitter = new EventEmitter();
	}
}