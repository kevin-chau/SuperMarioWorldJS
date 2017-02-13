import buildYoshisIsland1 from '../objects/YoshisIsland1';
import createPlayer from '../objects/player';
import configCamera from '../objects/camera';
import controls from '../objects/controls';
import mechanics from '../objects/mechanics';

var player;
var score = 0;

export default class Play extends Phaser.State {

    create() {
        /****************************************
      		MAP
      	****************************************/
      	buildYoshisIsland1();

      	/****************************************
      		AUDIO
      	****************************************/
      	// createSound();

      	/*****************************************
      		PLAYER
      	*****************************************/
      	player = createPlayer();

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
      	configCamera(player);

    }

    update() {
      	mechanics.updateMechanics(player);
    }
}
