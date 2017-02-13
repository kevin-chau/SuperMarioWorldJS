import GAME from '../game';
import constants from './constants';

function configCamera(player) {
  GAME.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER, 1, 1);
}

export default configCamera;
