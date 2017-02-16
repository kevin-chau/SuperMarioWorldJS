import * as states from './states';
import resize from './objects/resize';
import constants from './objects/constants';

var GAME = new Phaser.Game(window.innerWidth/constants.RESIZE_FACTOR, constants.SNES_HEIGHT, Phaser.AUTO, 'phaser-window');
GAME.antialias = false;

Object.keys(states).forEach(state => GAME.state.add(state, states[state]));
GAME.state.start('Boot');
$(window).resize(function() { resize.resizeGame(); } );

export default GAME;
