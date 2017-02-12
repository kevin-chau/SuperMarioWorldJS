var app = require('../app');

var MAP_HEIGHT = 432;

var loader = {};

loader.loader = function() {
  // scale the game 4x
  game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
  game.scale.setUserScale(2, 2);

  // enable crisp rendering
  // game.renderer.renderSession.roundPixels = true;
  // Phaser.Canvas.setImageRenderingCrisp(game.canvas)

  // Load assets
  preloader.loadAssets();

  // bounds
  game.world.setBounds(0, 0, 5120, MAP_HEIGHT);

  // Enable physics
  game.physics.startSystem(Phaser.Physics.ARCADE);

  // Enable Slopes plugin for arcade physics
  // game.plugins.add(Phaser.Plugin.ArcadeSlopes);
}

loader.loadAssets = function (){
  // Spritesheets
  game.load.tilemap('yoshis-island-1-tilemap', 'images/maps/tiles/yoshis-island-1-tilemap.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.spritesheet('collision-spritesheet', 'images/maps/tiles/ninja-tiles16.png', 16, 16);
  game.load.image('sky', 'images/maps/yoshis-island-1/background.png');
  game.load.atlasJSONArray('mario', 'images/sprites/spritesheets/mario.png', 'images/sprites/spritesheets/mario.json');
  game.load.atlasJSONArray('items', 'images/items/items.png', 'images/items/items.json');
  game.load.atlasJSONArray('hud', 'images/hud/hud.png', 'images/hud/hud.json');
  game.load.atlasJSONArray('groundTiles', 'images/maps/tiles/ground.png', 'images/maps/tiles/ground.json');
  game.load.atlasJSONArray('background-objects', 'images/background/background-objects.png', 'images/background/background-objects.json');
  game.load.atlasJSONArray('pipes', 'images/pipes/pipes.png', 'images/pipes/pipes.json');

  // Music
	// game.load.audio('Overworld Theme', 'audio/music/2-53\ Overworld\ Theme\ (SMW).mp3')

	// Sound Effects
	game.load.audio('Jump Wav', 'audio/effects/jump.wav');
	game.load.audio('Coin Wav', 'audio/effects/coin.wav');
	game.load.audio('Spin Wav', 'audio/effects/spin.wav');
}

module.exports = loader;
