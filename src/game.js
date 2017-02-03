var SNES_WIDTH = 256;
var SNES_HEIGHT = 224;

var game = new Phaser.Game(SNES_WIDTH, SNES_HEIGHT, Phaser.AUTO, '', { preload: preload, create: create, update: update }, false, false, null);

var score = 0;
var scoreText;

function preload() {

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
	// Enable physics
	game.physics.startSystem(Phaser.Physics.ARCADE);

	/*
	*******************************************
	MAP
	*******************************************
	*/
	// Sky background
	game.add.sprite(0,-192,'sky');

	// Platforms
	platforms = game.add.group();
	platforms.enableBody = true;

	// Ground
	var ground = platforms.create(0, game.world.height - 31, 'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;

	groundTilesGroup = game.add.group();
	for (var i = 0; i < SNES_WIDTH; i += 16){
		tile = groundTilesGroup.create(i,SNES_HEIGHT - 32, 'groundTiles');
		tile.frame = 84;
		tile = groundTilesGroup.create(i,SNES_HEIGHT - 16, 'groundTiles');
		tile.frame = 109;
	}

	bush = game.add.sprite(64, SNES_HEIGHT - 48, 'background-objects');
	bush.frame = 73;

	ledge = game.add.sprite(176, SNES_HEIGHT - 128, 'background-objects');
	ledge.frame = 23;
	ledge = game.add.sprite(180, SNES_HEIGHT - 76, 'background-objects');
	ledge.frame = 28;

	/*
	*******************************************
	AUDIO
	*******************************************
	*/

	// Music
	music = game.add.audio('Overworld Theme');
  music.play();

	// Sound effects
	jumpSFX = game.add.audio('Jump Wav');
	coinSFX = game.add.audio('Coin Wav');
	spinSFX = game.add.audio('Spin Wav');

	/*
	********************************************
	PLAYER
	********************************************
	*/

	player = game.add.sprite(24, game.world.height - 32, 'mario');
	game.physics.arcade.enable(player);
	player.body.bounce.y = 0;
	player.body.gravity.y = 1000;
	player.body.collideWorldBounds = true;

	// default direction
  player.direction = 'right';

	player.anchor.setTo(.5,1);
	player.body.width = 13;
	player.animations.add('walk', [15,14], 10, true);
	player.animations.add('run', [15,14], 16, true);
	player.animations.add('spin', [20,21,14], 20, true);

	player.hitPlatform;
	player.jumptimeStart = -1
	player.jumpType = 0;

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
}

function update() {
	player.hitPlatform = game.physics.arcade.collide(player, platforms);
	player.jumpType = player.body.touching.down && player.hitPlatform ? 0 : player.jumpType;


	if (player.direction === 'right'){
		player.scale.x = 1;
	} else if (player.direction === 'left'){
		player.scale.x = -1;
	}

	if (buttons.B.isDown && (player.jumptimeStart != -1))
	 {
		 		player.animations.play('spin');
			 if (game.time.time - player.jumptimeStart > 175) {
					 player.jumptimeStart = -1;
			 } else {
					 player.body.velocity.y = -250;
			 }
			 player.animations.play('spin');
	 }

	 if (buttons.A.isDown && (player.jumptimeStart != -1))
 	 {
 			 if (game.time.time - player.jumptimeStart > 200) {
 					 player.jumptimeStart = -1;
 			 } else {
 					 player.body.velocity.y = -200;
 			 }
 	 }

	if (cursors.left.isDown && !((cursors.up.isDown || cursors.down.isDown) && player.body.touching.down && player.hitPlatform)){
		player.body.velocity.x = buttons.Y.isDown ? -125 : -75;
		player.direction = 'left';
		if (player.jumpType != 2) {
			if (buttons.Y.isDown){
				player.animations.play('run');
			} else {
				player.animations.play('walk');
			}
		}
	}
	else if (cursors.right.isDown && !((cursors.up.isDown || cursors.down.isDown) && player.body.touching.down && player.hitPlatform))
	{
		player.body.velocity.x = buttons.Y.isDown ? 125 : 75;
		player.direction = 'right';
		if (player.jumpType != 2) {
			if (buttons.Y.isDown){
				player.animations.play('run');
			} else {
				player.animations.play('walk');
			}
		}
	}
	else if (player.jumpType == 2) {
		player.animations.play('spin');
	}
	else
	{
		player.body.velocity.x = 0;
		player.animations.stop();
    player.frame = 14;
	}

	if (cursors.up.isDown && player.body.touching.down && player.hitPlatform)
	{
		player.frame = 9;
	}

	if (cursors.down.isDown && player.body.touching.down && player.hitPlatform)
	{
		player.frame = 49;
	}

	if (player.jumpType === 1){
		if (player.body.velocity.y < 0) {
			player.frame = 1;
		} else if (player.body.velocity.y > 0){
			player.frame = 3;
		}
	}

	game.physics.arcade.collide(coins, platforms);
	game.physics.arcade.overlap(player, coins, collectCoin, null, this);
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
