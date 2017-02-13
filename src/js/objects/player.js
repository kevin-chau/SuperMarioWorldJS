import GAME from '../game';

function createPlayer() {
  var player = GAME.add.sprite(24, GAME.world.height - 64, 'mario');
  // var player = GAME.add.sprite(96, 432, 'mario');
  GAME.physics.arcade.enable(player);
  player.body.bounce.y = 0;
  player.body.gravity.y = 1000;
  player.body.collideWorldBounds = true;

  // default direction
  player.direction = 'right';

  player.anchor.setTo(.5,1);

  // Dimensions for slope collision
  player.body.width = 12;
  player.body.height = 15;
  GAME.slopes.enable(player);

  // Default frame
  player.frame = 14;


  player.animations.add('walk', [15,14], 10, true);
  player.animations.add('run', [15,14], 16, true);
  player.animations.add('spin', [20,21,14], 20, true);

  player.hitPlatform;
  player.jumptimeStart = -1
  player.jumpType = 0;

  player.body.drag.setTo(250,0);

  return player;
}

export default createPlayer;
