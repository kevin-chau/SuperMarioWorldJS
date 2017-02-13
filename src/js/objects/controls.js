import GAME from '../game';
import mechanics from './mechanics';

var controls = {};

controls.buttons = {};

controls.createControls = function () {
  // Load arrow key controls
  controls.cursors = GAME.input.keyboard.createCursorKeys();
  controls.buttons = {
    'A': GAME.input.keyboard.addKey(Phaser.Keyboard.D),
    'B': GAME.input.keyboard.addKey(Phaser.Keyboard.S),
    'Y': GAME.input.keyboard.addKey(Phaser.Keyboard.A),
    'Mute': GAME.input.keyboard.addKey(Phaser.Keyboard.M)
  };
  controls.buttons.B.onDown.add(mechanics.jump, this);
  controls.buttons.A.onDown.add(mechanics.spin, this);
  controls.buttons.Mute.onDown.add(controls.mute, this);
}

controls.mute = function () {
	GAME.sound.mute = !GAME.sound.mute;
}

export default controls;
