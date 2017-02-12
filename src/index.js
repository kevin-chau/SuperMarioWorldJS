import GameState from 'states/GameState';

var SNES_WIDTH = 256;
var SNES_HEIGHT = 224;

class Game extends Phaser.Game {

	constructor() {
		super(window.innerWidth / 2.05, SNES_HEIGHT, Phaser.WEBGL, 'content', null);
		this.state.add('GameState', GameState, false);
		this.state.start('GameState');
	}

}

var game = new Game();

$(window).resize(function() { resizeGame(); } );

function resizeGame() {
    var size = {
        width: window.innerWidth / 2.05,
        height: SNES_HEIGHT
    };
    game.width = size.width;
    game.height = size.height;
    game.canvas.width = size.width;
    game.canvas.height = size.height;
    game.scale.width = size.width;
    game.scale.height = size.height;
    game.renderer.resize(size.width, size.height);
    game.camera.setSize(size.width, size.height);
    game.camera.setBoundsToWorld();
}
