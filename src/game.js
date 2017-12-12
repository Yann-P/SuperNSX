class Game extends Phaser.Game {

    constructor() {
        let w, h;
        const RESOLUTION = 800;
        if(window.innerWidth > window.innerHeight) {
            w = RESOLUTION*(window.innerWidth / window.innerHeight)
            h = RESOLUTION
        } else {
            w = RESOLUTION
            h = 800*(window.innerHeight / window.innerWidth)
        }
        super(w, h, Phaser.CANVAS, 'canvas', null, null, false);

        window.addEventListener('orientationchange', () => {
            if(this.state.current != "play") window.location.reload();
        })

        
        this.state.add('boot', BootState, true);
        this.state.add('load', LoadState, false);        
        this.state.add('play', PlayState, false);
    }

}