import * as states from './states';
import GameState from './states/GameState';
import resizeGame from './objects/window';
import constants from './objects/constants';

class Game extends Phaser.Game {

	constructor() {
		super(window.innerWidth / 2.05, constants.SNES_HEIGHT, Phaser.WEBGL, 'content', null);
		Object.keys(states).forEach(state => this.state.add(state, states[state]));
		this.state.start('Boot');
	}

}

const GAME = new Game();

$(window).resize(function() { resizeGame(); } );

export default GAME;
