export default class Preload extends Phaser.State {

    preload() {
      // Background Image
      this.load.image('sky', 'assets/images/background/background.png');

      // Spritesheets
      this.load.tilemap('yoshis-island-1-tilemap', 'assets/images/tiles/yoshis-island-1-tilemap.json', null, Phaser.Tilemap.TILED_JSON);
      this.load.spritesheet('collision-spritesheet', 'assets/images/tiles/ninja-tiles16.png', 16, 16);
      this.load.atlasJSONArray('mario', 'assets/images/sprites/mario.png', 'assets/images/sprites/mario.json');
      this.load.atlasJSONArray('items', 'assets/images/items/items.png', 'assets/images/items/items.json');
      this.load.atlasJSONArray('hud', 'assets/images/hud/hud.png', 'assets/images/hud/hud.json');
      this.load.atlasJSONArray('groundTiles', 'assets/images/tiles/ground.png', 'assets/images/tiles/ground.json');
      this.load.atlasJSONArray('background-objects', 'assets/images/background/background-objects.png', 'assets/images/background/background-objects.json');
      this.load.atlasJSONArray('pipes', 'assets/images/pipes/pipes.png', 'assets/images/pipes/pipes.json');
      this.load.atlasJSONArray('enemies', 'assets/images/enemies/enemies.png', 'assets/images/enemies/enemies.json');

      // Music
    	this.load.audio('Overworld Theme Intro', 'assets/audio/music/mpi.mp3');
      this.load.audio('Overworld Theme', 'assets/audio/music/mp.mp3');

    	// Sound Effects
    	this.load.audio('Jump Wav', 'assets/audio/effects/jump.wav');
    	this.load.audio('Coin Wav', 'assets/audio/effects/coin.wav');
    	this.load.audio('Spin Wav', 'assets/audio/effects/spin.wav');

    }

    create() {
        this.state.start('Menu');
    }

}
