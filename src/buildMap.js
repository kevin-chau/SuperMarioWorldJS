function buildYoshisIsland1() {
  // Background Objects
  bush = game.add.sprite(64, MAP_HEIGHT - 64, 'background-objects');
  bush.frame = 73;

  // Ground Platform
  for (var i = 0; i < 59; i += 1){
		tile = groundTilesGroup.create(i * 16,MAP_HEIGHT - 48, 'groundTiles');
		tile.body.immovable = true;
		tile.frame = 84;
		tile = groundTilesGroup.create(i * 16,MAP_HEIGHT - 16, 'groundTiles');
		tile.frame = 109;
		tile = groundTilesGroup.create(i * 16,MAP_HEIGHT - 32, 'groundTiles');
		tile.frame = 109;
	}

  buildSlopes();

  // Ledges
  ledges = game.add.group();
  ledge = ledges.create(176, MAP_HEIGHT - 144, 'background-objects');
  ledge.frame = 23;
  ledge = ledges.create(180, MAP_HEIGHT - 92, 'background-objects');
  ledge.frame = 28;
}

function buildSlopes() {
  // Slopes
	game.map = game.add.tilemap('demo-tilemap');
	game.map.addTilesetImage('collision', 'collision-spritesheet');
	game.groundSlope = game.map.createLayer('collision');
	game.slopes.convertTilemapLayer(game.groundSlope, {
				2:  'FULL',
				3:  'HALF_BOTTOM_LEFT',
				4:  'HALF_BOTTOM_RIGHT',
				6:  'HALF_TOP_LEFT',
				5:  'HALF_TOP_RIGHT',
				15: 'QUARTER_BOTTOM_LEFT_LOW',
				16: 'QUARTER_BOTTOM_RIGHT_LOW',
				17: 'QUARTER_TOP_RIGHT_LOW',
				18: 'QUARTER_TOP_LEFT_LOW',
				19: 'QUARTER_BOTTOM_LEFT_HIGH',
				20: 'QUARTER_BOTTOM_RIGHT_HIGH',
				21: 'QUARTER_TOP_RIGHT_HIGH',
				22: 'QUARTER_TOP_LEFT_HIGH',
				23: 'QUARTER_LEFT_BOTTOM_HIGH',
				24: 'QUARTER_RIGHT_BOTTOM_HIGH',
				25: 'QUARTER_RIGHT_TOP_LOW',
				26: 'QUARTER_LEFT_TOP_LOW',
				27: 'QUARTER_LEFT_BOTTOM_LOW',
				28: 'QUARTER_RIGHT_BOTTOM_LOW',
				29: 'QUARTER_RIGHT_TOP_HIGH',
				30: 'QUARTER_LEFT_TOP_HIGH',
				31: 'HALF_BOTTOM',
				32: 'HALF_RIGHT',
				33: 'HALF_TOP',
				34: 'HALF_LEFT'
			});
	game.map.setCollisionBetween(2, 34, true, 'collision');

	// This should work, but doesn't seem to work for the slopes engine
	game.map.forEach(function(tile) {
			tile.collideDown = false;
		},
		this, 0, 0, game.map.width, game.map.height, 0);
}
