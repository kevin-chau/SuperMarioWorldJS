import * as states from './states';
import GameState from './states/GameState';

const SNES_WIDTH = 256;
const SNES_HEIGHT = 224;

class Game extends Phaser.Game {

	constructor() {
		super(window.innerWidth / 2.05, SNES_HEIGHT, Phaser.WEBGL, 'content', null);
		this.state.add('GameState', GameState, false);
		this.state.start('GameState');
	}

}

const GAME = new Game();

Object.keys(states).forEach(state => GAME.state.add(state, states[state]));

GAME.state.start('Boot');

$(window).resize(function() { resizeGame(); } );


function resizeGame() {
    var size = {
        width: window.innerWidth / 2.05,
        height: SNES_HEIGHT
    };
    GAME.width = size.width;
    GAME.height = size.height;
    GAME.canvas.width = size.width;
    GAME.canvas.height = size.height;
    GAME.scale.width = size.width;
    GAME.scale.height = size.height;
    GAME.renderer.resize(size.width, size.height);
    GAME.camera.setSize(size.width, size.height);
    GAME.camera.setBoundsToWorld();
}
