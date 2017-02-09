// MACROS
var SNES_WIDTH = 256;
var SNES_HEIGHT = 224;
var MAP_HEIGHT = 432;

// GAME
var game = new Phaser.Game(window.innerWidth / 2.05, SNES_HEIGHT, Phaser.AUTO, '', { preload: preload, create: create, update: update }, false, false, null);

// SCORE
var score = 0;

function preload() {
	loader();
}

function create() {
	/****************************************
		MAP
	****************************************/
	buildYoshisIsland1();

	/****************************************
		AUDIO
	****************************************/
	createSound();

	/*****************************************
		PLAYER
	*****************************************/
	createPlayer();

	/*****************************************
		Coins
	*****************************************/
	createCoins();

	/****************************************
		CONTROLS
	****************************************/
	createControls();

	/****************************************
		HUD
	****************************************/
	createHUD();

	/****************************************
		CAMERA
	****************************************/
	configCamera();
}

function update() {
	updateMechanics();
}
