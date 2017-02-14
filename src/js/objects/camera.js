import GAME from '../game';
import constants from './constants';

var camera = {};

camera.configCamera = function (player) {
  GAME.camera.height = constants.SNES_HEIGHT + 16;
  GAME.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);
}

export default camera;
