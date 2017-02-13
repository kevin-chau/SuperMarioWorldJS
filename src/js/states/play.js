import map from '../objects/map';
import player from '../objects/player';
import camera from '../objects/camera';
import controls from '../objects/controls';
import sound from '../objects/sound';
import mechanics from '../objects/mechanics';
import GAME from '../game';

export default class Play extends Phaser.State {

    create() {
        /****************************************
      		MAP
      	****************************************/
      	map.buildYoshisIsland1();

      	/****************************************
      		AUDIO
      	****************************************/
      	sound.createSound();

      	/*****************************************
      		PLAYER
      	*****************************************/
      	player.createPlayer();

      	/*****************************************
      		Coins
      	*****************************************/
      	// createCoins();

      	/****************************************
      		CONTROLS
      	****************************************/
      	controls.createControls();

      	/****************************************
      		HUD
      	****************************************/
      	// createHUD();

      	/****************************************
      		CAMERA
      	****************************************/
      	camera.configCamera(GAME.player);

    }

    update() {
      	mechanics.updateMechanics(GAME.player);
    }
}
