class Game extends Phaser.Game {

    constructor() {
        let w, h;
        const RESOLUTION = 800;
        w = RESOLUTION/1.33
        h = RESOLUTION
       
        super(w, h, Phaser.CANVAS, 'canvas', null, null, false);

        window.addEventListener('orientationchange', () => {
            if(this.state.current != "play") window.location.reload();
        });
        
        this.state.add('boot', BootState, true);
        this.state.add('load', LoadState, false);        
        this.state.add('title', TitleState, false);
        this.state.add('gameover', GameOverState, false);
        this.state.add('play', PlayState, false);

    }

}