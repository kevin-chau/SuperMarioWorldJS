var MAP_HEIGHT_16 = 416;
var MAP_HEIGHT_32 = 400;
var MAP_HEIGHT_48 = 384;

function buildYoshisIsland1() {

  // SLOPES
  buildSlopes();

  // Sky background
  for (var i = 0; i < 10; i++){
    game.add.sprite(i*512, 0, 'sky');
  }

  platforms = game.add.group();
	platforms.enableBody = true;
	groundTilesGroup = game.add.group();
	groundTilesGroup.enableBody = true;
	tilesGroup = game.add.group();
	tilesGroup.enableBody = true;
  blocksGroup = game.add.group();
	blocksGroup.enableBody = true;

  // Background Objects
  createBushes();

  // First Ground Platform
  createGround(0,59);

  createElevatedGround(59,72,4);

  createGround(73,192);

  // Ditch
  createDitch(192,198);

  createGround(199,212);

  // GAP
  createGap(212,3);

  createGround(216,218);

  createDitch(218, 223);

  createGround(224,227);

  createGap(227,3);
  createGround(231,286);

  createElevatedGround(286, 291, 3);

  createGround(292,320);


  // Ledges
  ledges = game.add.group();
  createLedge(176);
  createLedge(1200);
  createLedge(1264);
  createLedge(1328);

  createPipes();

  createBlocks();
}

function createPipes(){
  pipePlatform = platforms.create(1808, MAP_HEIGHT - 96, 'pipes',4);
  pipePlatform.body.immovable = true;
  pipePlatform = platforms.create(1809, MAP_HEIGHT - 64, 'pipes',44);
  pipePlatform.body.immovable = true;

  pipePlatform = platforms.create(1920, MAP_HEIGHT - 80, 'pipes',4);
  pipePlatform.body.immovable = true;

  // Slope Pipes
  pipe = ledges.create(818, MAP_HEIGHT - 101, 'background-objects', 26);
  pipe = ledges.create(871, MAP_HEIGHT - 144, 'background-objects', 24);
  pipe = ledges.create(1986, MAP_HEIGHT - 101, 'background-objects',26);
  pipe = ledges.create(2039, MAP_HEIGHT - 144, 'background-objects',24);

  pipes = platforms.create(2096, MAP_HEIGHT - 112, 'background-objects', 32);
  pipes.body.immovable = true;

  // Silver Pipe
  pipePlatform = platforms.create(2224, MAP_HEIGHT - 112, 'pipes',3);
  pipePlatform.body.immovable = true;
  pipePlatform = platforms.create(2225, MAP_HEIGHT - 80, 'pipes',43);
  pipePlatform.body.immovable = true;
  pipePlatform = platforms.create(2225, MAP_HEIGHT - 64, 'pipes',43);
  pipePlatform.body.immovable = true;

  // Last Pipe
  pipePlatform = platforms.create(4544, MAP_HEIGHT - 112, 'pipes',87);
  pipePlatform.body.immovable = true;
  pipePlatform = platforms.create(4545, MAP_HEIGHT - 80, 'pipes',102);
  pipePlatform.body.immovable = true;
  pipePlatform = platforms.create(4545, MAP_HEIGHT - 64, 'pipes',102);
  pipePlatform.body.immovable = true;
}

function createBlocks(){
  block = blocksGroup.create(1904, MAP_HEIGHT - 64, 'background-objects', 67);
  block.body.immovable = true;
  block = blocksGroup.create(1904, MAP_HEIGHT - 80, 'background-objects', 67);
  block.body.immovable = true;
  block = blocksGroup.create(1904, MAP_HEIGHT - 96, 'background-objects', 67);
  block.body.immovable = true;
  block = platforms.create(1904, MAP_HEIGHT - 112, 'background-objects', 67);
  block.body.immovable = true;
  block = blocksGroup.create(1952, MAP_HEIGHT - 64, 'background-objects', 67);
  block.body.immovable = true;
  block = blocksGroup.create(1952, MAP_HEIGHT - 80, 'background-objects', 67);
  block.body.immovable = true;
  block = blocksGroup.create(1952, MAP_HEIGHT - 96, 'background-objects', 67);
  block.body.immovable = true;
  block = platforms.create(1952, MAP_HEIGHT - 112, 'background-objects', 67);
  block.body.immovable = true;
  block = platforms.create(1920, MAP_HEIGHT - 112, 'background-objects', 69);
  block.body.immovable = true;
  block = platforms.create(1936, MAP_HEIGHT - 112, 'background-objects', 69);
  block.body.immovable = true;
}

function createLedge(x){
  ledge = ledges.create(x, MAP_HEIGHT - 144, 'background-objects',23);
  ledge = ledges.create(x+4, MAP_HEIGHT - 92, 'background-objects',28);
}

function createElevatedGround(x1,x2,y){
  // Inside Corner
  createGroundTile(x1 * 16, MAP_HEIGHT_48,183);
  // Right Vertical
  for (var j = 0; j < y - 1; j++){
    createTile(x1 * 16, MAP_HEIGHT - (64 + j * 16),108);
  }
  // Outside Corner
  createGroundTile(x1 * 16, MAP_HEIGHT - (48 + y * 16),83);
  // Top Ground
  for (var i = x1 + 1; i < x2; i += 1){
    createGroundTile(i * 16, MAP_HEIGHT - (48 + y * 16),84);
    for (var j = 0; j < y; j++){
      createGroundTile(i * 16, MAP_HEIGHT - (48 + j * 16) ,109);
    }
  }
  // Outside Corner
  createGroundTile(x2 * 16, MAP_HEIGHT - (48 + y * 16),85);
  // Left Vertical
  for (var j = 0; j < y - 1; j++){
    createTile(x2 * 16, MAP_HEIGHT - (64 + j * 16),110);
  }
  // Inside Corner
  createGroundTile(x2 * 16, MAP_HEIGHT_48,182);
  for (var i = x1; i < x2 + 1; i+=1){
    createGroundTile(i * 16, MAP_HEIGHT_16,109);
    createGroundTile(i * 16, MAP_HEIGHT_32,109);
  }
}

function createGap(x, width){
  createGroundTile(x * 16, MAP_HEIGHT_48, 85);
  createTile(x * 16, MAP_HEIGHT_32, 110);
  createTile(x * 16, MAP_HEIGHT_16, 110);
  createTile((x + width) * 16, MAP_HEIGHT_32,108);
  createTile((x + width) * 16, MAP_HEIGHT_16,108);
  createGroundTile((x + width) * 16, MAP_HEIGHT_48,83);
}

function createDitch(x1, x2){
  createGroundTile(x1 * 16, MAP_HEIGHT_48,85);
  createGroundTile(x1 * 16, MAP_HEIGHT_32,182);
  createGroundTile(x1 * 16, MAP_HEIGHT_16,109);
  for (var i = x1 + 1; i < x2; i+=1){
    createGroundTile(i * 16, MAP_HEIGHT_32,84);
    createGroundTile(i * 16, MAP_HEIGHT_16,109);
  }
  createGroundTile(x2 * 16, MAP_HEIGHT_32,183);
  createGroundTile(x2 * 16, MAP_HEIGHT_16,109);
  createGroundTile(x2 * 16, MAP_HEIGHT_48,83);
}

function createGround(x1, x2){
  for (var i = x1; i < x2; i += 1){
    createGroundTile(i * 16, MAP_HEIGHT_48,84);
    createGroundTile(i * 16, MAP_HEIGHT_16,109);
    createGroundTile(i * 16, MAP_HEIGHT_32,109);
  }
}

function createGroundTile(x,y,frame){
  tile = groundTilesGroup.create(x, y, 'groundTiles',frame);
  tile.body.immovable = true;
}

function createTile(x,y,frame){
  tile = tilesGroup.create(x, y, 'groundTiles',frame);
  tile.body.immovable = true;
}

function createBushes() {
  createBush(64, MAP_HEIGHT - 64, 73);
  createBush(320, MAP_HEIGHT - 64, 72);
  createBush(480, MAP_HEIGHT - 64, 72);
  createBush(640, MAP_HEIGHT - 64, 73);
  createBush(736, MAP_HEIGHT - 64, 72);
  createBush(1056, MAP_HEIGHT - 128, 72);
  createBush(1616, MAP_HEIGHT - 64, 73);
  createBush(1728, MAP_HEIGHT - 64, 73);
  createBush(2464, MAP_HEIGHT - 64, 72);
  createBush(3200, MAP_HEIGHT - 64, 72);
  createBush(3712, MAP_HEIGHT - 64, 72);
  createBush(3984, MAP_HEIGHT - 64, 72);
  createBush(4224, MAP_HEIGHT - 64, 72);
}

function createBush(x,y,frame) {
  bush = game.add.sprite(x, y, 'background-objects',frame);
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
