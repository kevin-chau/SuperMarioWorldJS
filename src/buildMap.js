function buildYoshisIsland1() {
  // Background Objects
  createBushes();

  // First Ground Platform
  for (var i = 0; i < 59; i += 1){
    createGroundTile(i * 16, MAP_HEIGHT - 48,84);
    createGroundTile(i * 16, MAP_HEIGHT - 16,109);
    createGroundTile(i * 16, MAP_HEIGHT - 32,109);
	}


  // Inside Corner
  createGroundTile(59 * 16, MAP_HEIGHT - 48,183);
  // Right Vertical
  createTile(59 * 16, MAP_HEIGHT - 64,108);
  createTile(59 * 16, MAP_HEIGHT - 80,108);
  createTile(59 * 16, MAP_HEIGHT - 96,108);
  // Outside Corner
  createGroundTile(59 * 16, MAP_HEIGHT - 112,83);
  // Top Ground
  for (var i = 60; i < 72; i += 1){
    createGroundTile(i * 16, MAP_HEIGHT - 112,84);
    createGroundTile(i * 16, MAP_HEIGHT - 96,109);
    createGroundTile(i * 16, MAP_HEIGHT - 80,109);
    createGroundTile(i * 16, MAP_HEIGHT - 64,109);
    createGroundTile(i * 16, MAP_HEIGHT - 48,109);
  }
  // Outside Corner
  createGroundTile(72 * 16, MAP_HEIGHT - 112,85);
  // Left Vertical
  createTile(72 * 16, MAP_HEIGHT - 64,110);
  createTile(72 * 16, MAP_HEIGHT - 80,110);
  createTile(72 * 16, MAP_HEIGHT - 96,110);
  // Inside Corner
  createGroundTile(72 * 16, MAP_HEIGHT - 48,182);
  for (var i = 59; i < 73; i+=1){
    createGroundTile(i * 16, MAP_HEIGHT - 16,109);
    createGroundTile(i * 16, MAP_HEIGHT - 32,109);
  }


  buildSlopes();

  // Ledges
  ledges = game.add.group();
  ledge = ledges.create(176, MAP_HEIGHT - 144, 'background-objects');
  ledge.frame = 23;
  ledge = ledges.create(180, MAP_HEIGHT - 92, 'background-objects');
  ledge.frame = 28;

  // Slope Pipe
  pipe = ledges.create(818, MAP_HEIGHT - 101, 'background-objects');
  pipe.frame = 26;
  pipe = ledges.create(871, MAP_HEIGHT - 144, 'background-objects');
  pipe.frame = 24;
}

function createGroundTile(x,y,frame){
  tile = groundTilesGroup.create(x, y, 'groundTiles');
  tile.body.immovable = true;
  tile.frame = frame;
}

function createTile(x,y,frame){
  tile = tilesGroup.create(x, y, 'groundTiles');
  tile.body.immovable = true;
  tile.frame = frame;
}

function createBushes() {
  createBush(64, MAP_HEIGHT - 64, 73);
  createBush(320, MAP_HEIGHT - 64, 72);
  createBush(480, MAP_HEIGHT - 64, 72);
  createBush(640, MAP_HEIGHT - 64, 73);
  createBush(736, MAP_HEIGHT - 64, 72);
}

function createBush(x,y,frame) {
  bush = game.add.sprite(x, y, 'background-objects');
  bush.frame = frame;
}

function buildSlopes() {
  // Slopes
	game.mapSlope = game.add.tilemap('demo-tilemap');
	game.mapSlope.addTilesetImage('collision', 'collision-spritesheet');
	game.groundSlope = game.mapSlope.createLayer('collision');
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
	game.mapSlope.setCollisionBetween(2, 34, true, 'collision');

	// This should work, but doesn't seem to work for the slopes engine
	game.mapSlope.forEach(function(tile) {
			tile.collideDown = false;
		},
		this, 0, 0, game.mapSlope.width, game.mapSlope.height, 0);
}
