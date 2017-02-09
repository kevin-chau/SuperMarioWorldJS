function loader(){
  // scale the game 4x
  game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
  game.scale.setUserScale(2, 2);

  // enable crisp rendering
  // game.renderer.renderSession.roundPixels = true;
  Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)

  // Load assets
  loadAssets();

  // bounds
  game.world.setBounds(0, 0, 5120, MAP_HEIGHT);

  // Enable physics
  game.physics.startSystem(Phaser.Physics.ARCADE);

  // Enable Slopes plugin for arcade physics
  game.plugins.add(Phaser.Plugin.ArcadeSlopes);
}

function loadAssets(){
  // Spritesheets
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
  game.load.atlasJSONArray('pipes', 'assets/pipes/pipes.png', 'assets/pipes/pipes.json');

  // Music
	game.load.audio('Overworld Theme', 'assets/sound/music/2-53\ Overworld\ Theme\ (SMW).mp3')

	// Sound Effects
	game.load.audio('Jump Wav', 'assets/sound/effects/jump.wav');
	game.load.audio('Coin Wav', 'assets/sound/effects/coin.wav');
	game.load.audio('Spin Wav', 'assets/sound/effects/spin.wav');
}
