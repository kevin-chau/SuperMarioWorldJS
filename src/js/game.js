import * as states from './states';
import resizeGame from './objects/window';
import constants from './objects/constants';

var GAME = new Phaser.Game(window.innerWidth/2.05, constants.SNES_HEIGHT, Phaser.WEBGL);
Object.keys(states).forEach(state => GAME.state.add(state, states[state]));
GAME.state.start('Boot');
$(window).resize(function() { resizeGame(); } );

export default GAME;
