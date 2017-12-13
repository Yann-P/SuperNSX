class Weapon{
	constructor(game){
		this.game = game;
		this.shootEmitter = new EventEmitter();
		this._enabled = true;
	}

	enable() {
		this._enabled = true
	}

	disable() {
		this._enabled = false
	}
}