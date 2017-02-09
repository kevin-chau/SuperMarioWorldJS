var SNES_WIDTH = 256;
var SNES_HEIGHT = 224;
var MAP_HEIGHT = 432;

var game = new Phaser.Game(window.innerWidth / 2.05, SNES_HEIGHT, Phaser.AUTO, '', { preload: preload, create: create, update: update }, false, false, null);

var score = 0;

function preload() {
  // scale the game 4x
  game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
  game.scale.setUserScale(2, 2);

  // enable crisp rendering
  // game.renderer.renderSession.roundPixels = true;
  Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)

	// Load assets
	loadAssets();
}

function create() {
	// bounds
	game.world.setBounds(0, 0, 5120, MAP_HEIGHT);

	// Enable physics
	game.physics.startSystem(Phaser.Physics.ARCADE);

	// Enable Slopes plugin for arcade physics
	game.plugins.add(Phaser.Plugin.ArcadeSlopes);

	/*
	*******************************************
	MAP
	*******************************************
	*/
	buildYoshisIsland1();

	/*
	*******************************************
	AUDIO
	*******************************************
	*/
	createSound();

	/*
	********************************************
	PLAYER
	********************************************
	*/
	createPlayer();

	/*
	********************************************
	Coins
	********************************************
	*/
	createCoins();

	/*
	*******************************************
	CONTROLS
	*******************************************
	*/
	createControls();

	/*
	*******************************************
	HUD
	*******************************************
	*/
	createHUD();

	// Camera
	game.camera.height = SNES_HEIGHT + 16;
	game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER, 1, 1);
}

function update() {
	updateMechanics();
}
