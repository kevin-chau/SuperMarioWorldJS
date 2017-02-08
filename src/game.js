// import {buildYoshisIsland1} from 'buildMap';

var SNES_WIDTH = 256;
var SNES_HEIGHT = 224;
var MAP_HEIGHT = 432;

var game = new Phaser.Game(SNES_WIDTH, SNES_HEIGHT, Phaser.AUTO, '', { preload: preload, create: create, update: update }, false, false, null);

var score = 0;
var scoreText;

function preload() {

	game.load.tilemap('demo-tilemap', 'assets/maps/tiles/demo.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.tilemap('yoshis-island-1-tilemap', 'assets/maps/tiles/yoshis-island-1-tilemap.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.spritesheet('collision-spritesheet', 'assets/maps/tiles/ninja-tiles16.png', 16, 16);
	game.load.image('sky', 'assets/maps/yoshis-island-1/background.png');
	game.load.image('ground', 'assets/tutorial/platform.png');
	game.load.image('star', 'assets/tutorial/star.png');
	game.load.atlasJSONArray('mario', 'assets/sprites/spritesheets/mario.png', 'assets/sprites/spritesheets/mario.json');
	game.load.atlasJSONArray('items', 'assets/items/items.png', 'assets/items/items.json');
	game.load.atlasJSONArray('hud', 'assets/hud/hud.png', 'assets/hud/hud.json');
	game.load.atlasJSONArray('groundTiles', 'assets/maps/tiles/ground.png', 'assets/maps/tiles/ground.json');
	game.load.atlasJSONArray('background-objects', 'assets/backgrounds/background-objects.png', 'assets/backgrounds/background-objects.json');

  // scale the game 4x
  game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
  game.scale.setUserScale(2, 2);

  // enable crisp rendering
  game.renderer.renderSession.roundPixels = true;
  Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)

	// Music
	game.load.audio('Overworld Theme', 'assets/sound/music/2-53\ Overworld\ Theme\ (SMW).mp3')

	// Sound Effects
	game.load.audio('Jump Wav', 'assets/sound/effects/jump.wav');
	game.load.audio('Coin Wav', 'assets/sound/effects/coin.wav');
	game.load.audio('Spin Wav', 'assets/sound/effects/spin.wav');
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
	// Sky background
	for (var i = 0; i < 10; i++){
		game.add.sprite(i*512, 0, 'sky');
	}

	// Platforms
	platforms = game.add.group();
	platforms.enableBody = true;
	groundTilesGroup = game.add.group();
	groundTilesGroup.enableBody = true;
	buildYoshisIsland1();

	/*
	*******************************************
	AUDIO
	*******************************************
	*/

	// Music
	music = game.add.audio('Overworld Theme');
  // music.play();

	// Sound effects
	jumpSFX = game.add.audio('Jump Wav');
	coinSFX = game.add.audio('Coin Wav');
	spinSFX = game.add.audio('Spin Wav');

	/*
	********************************************
	PLAYER
	********************************************
	*/

	player = game.add.sprite(24, game.world.height - 50, 'mario');
	game.physics.arcade.enable(player);
	player.body.bounce.y = 0;
	player.body.gravity.y = 1000;
	player.body.collideWorldBounds = true;

	// default direction
  player.direction = 'right';

	player.anchor.setTo(.5,1);

	// Dimensions for slope collision
	player.body.width = 10;
	player.body.height = 17;
	game.slopes.enable(player);

	player.body.width = 14;
	player.body.height = 20;


	player.animations.add('walk', [15,14], 10, true);
	player.animations.add('run', [15,14], 16, true);
	player.animations.add('spin', [20,21,14], 20, true);

	player.hitPlatform;
	player.jumptimeStart = -1
	player.jumpType = 0;

	player.body.drag.setTo(250,0)
	/*
	********************************************
	Coins
	********************************************
	*/

	coins = game.add.group();

	coins.enableBody = true;

	// for (var i = 0; i < 12; i++){
	// 	var coin = coins.create(i*30, game.world.height - 40,'items');
	// 	coin.anchor.setTo(.5,.5);
	// 	coin.body.height = 15;
	// 	coin.body.width = 12;
	// 	coin.frame = 4;
	// 	coin.animations.add('spin', [4,5,6,7], 8, true);
	// 	coin.animations.play('spin');
	// }


	/*
	*******************************************
	CONTROLS
	*******************************************
	*/
	// Load arrow key controls
	cursors = game.input.keyboard.createCursorKeys();
	buttons = {
		'A': game.input.keyboard.addKey(Phaser.Keyboard.D),
		'B': game.input.keyboard.addKey(Phaser.Keyboard.S),
		'Y': game.input.keyboard.addKey(Phaser.Keyboard.A),
		'Mute': game.input.keyboard.addKey(Phaser.Keyboard.M)
	};
	buttons.B.onDown.add(jump, this);
	buttons.A.onDown.add(spin, this);
	buttons.Mute.onDown.add(mute, this);

	/*
	*******************************************
	HUD
	*******************************************
	*/
	// scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000'});
	coin1HUD = game.add.sprite(200,15, 'hud'); // Y good, x needs adjustment
	coin1HUD.frame = 3;
	coin2HUD = game.add.sprite(209,16, 'hud'); // Y good, x needs adjustment
	coin2HUD.frame = 5;

	// Camera
	game.camera.height = SNES_HEIGHT + 16;
	game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER, 1, 1);

}

function update() {
	player.body.height = player.height;
	player.onSlope = game.physics.arcade.collide(player, game.groundSlope);

	player.hitPlatform = game.physics.arcade.collide(player, groundTilesGroup) || player.onSlope;
	if (player.onSlope) { player.body.drag.setTo(500,500); } else { player.body.drag.setTo(250,0); }
	player.jumpType = player.body.touching.down && player.hitPlatform ? 0 : player.jumpType;

	if (player.direction === 'right'){
		player.scale.x = 1;
	} else if (player.direction === 'left'){
		player.scale.x = -1;
	}

	if (buttons.B.isDown && (player.jumptimeStart != -1))
	 {
			 if (game.time.time - player.jumptimeStart > 175) {
					 player.jumptimeStart = -1;
			 } else {
					 player.body.velocity.y = (Math.abs(player.body.velocity.x) >= 125) ? -290 : ((Math.abs(player.body.velocity.x) >= 75) ? -265 : -250);
			 }
	 }

	 if (buttons.A.isDown && (player.jumptimeStart != -1))
 	 {
 			 if (game.time.time - player.jumptimeStart > 200) {
 					 player.jumptimeStart = -1;
 			 } else {
				player.body.velocity.y = (Math.abs(player.body.velocity.x) >= 125) ? -240 : ((Math.abs(player.body.velocity.x) >= 75) ? -215 : -200);
 			 }
 	 }

	if (cursors.left.isDown && !((cursors.up.isDown || cursors.down.isDown))){
		player.direction = 'left';
		player.body.maxVelocity.x = buttons.Y.isDown ? 125 : 75;
		player.body.acceleration.x = buttons.Y.isDown ? -500 : -500;
		player.body.acceleration.x = player.onSlope ? -10000 : player.body.acceleration.x;
	}
	else if (cursors.right.isDown && !((cursors.up.isDown || cursors.down.isDown)))
	{
		player.direction = 'right';
		player.body.maxVelocity.x = buttons.Y.isDown ? 125 : 75;
		player.body.acceleration.x = buttons.Y.isDown ? 500 : 500;
		player.body.acceleration.x = player.onSlope ? 10000 : player.body.acceleration.x;
	}
	else if (player.jumpType === 2) {
		if (player.body.acceleration.x > 0){
			player.body.acceleration.x = player.body.acceleration.x <= 0 ? 0 : player.body.acceleration.x - 50;
		} else if (player.body.acceleration.x < 0) {
			player.body.acceleration.x = player.body.acceleration.x >= 0 ? 0 : player.body.acceleration.x + 50;
		}
		player.animations.play('spin');
	} else if (player.jumpType === 1){
		if (player.body.acceleration.x > 0){
			player.body.acceleration.x = player.body.acceleration.x <= 0 ? 0 : player.body.acceleration.x - 100;
		} else if (player.body.acceleration.x < 0) {
			player.body.acceleration.x = player.body.acceleration.x >= 0 ? 0 : player.body.acceleration.x + 100;
		}
	}
	else
	{
		player.body.acceleration.x = 0;
	}

	if (Math.abs(player.body.velocity.x) > 75) {
		if (player.jumpType === 0){
			player.animations.play('run');
		}
	} else if (Math.abs(player.body.velocity.x) > 0){
		if (player.jumpType === 0){
			player.animations.play('walk');
		}
	} else {
		if (player.jumpType != 2){
				player.animations.stop();
		    player.frame = 14;
		}
	}



	if (player.jumpType === 1){
		if (player.body.velocity.y < 0) {
			player.frame = 1;
		} else if (player.body.velocity.y > 0){
			player.frame = 3;
		}
	}

	if (cursors.up.isDown && player.body.touching.down && player.hitPlatform)
	{
		player.frame = 9;
	}
	else if (cursors.down.isDown && player.body.touching.down && player.hitPlatform)
	{
		player.frame = 49;
	}

	// Coin collisions
	// game.physics.arcade.collide(coins, platforms);
	// game.physics.arcade.overlap(player, coins, collectCoin, null, this);

	game.physics.arcade.collide(player, game.groundSlope);
}

function render() {
}

function spin() {
	player.jumpType = 2;
	if (player.body.touching.down && player.hitPlatform)
	 {
			 player.jumptimeStart = game.time.time;
			 player.body.velocity.y = -200;
			 spinSFX.play();
			 player.animations.play('spin');
	 }
}

function jump() {
	player.jumpType = 1;
	if (player.body.touching.down && player.hitPlatform)
	 {
			 player.jumptimeStart = game.time.time;
			 player.body.velocity.y = -250;
			 jumpSFX.play();
	 }
}

function mute() {
	game.sound.mute = !game.sound.mute;
}

function collectCoin(player, coin) {
	coin.kill();
	coinSFX.play();

	score += 10;
	// scoreText.text = 'Score: ' + score;
}
