import GAME from '../game';
import controls from './controls';
import sound from './sound'

var mechanics = {};

mechanics.updateMechanics = function (player){
  player.body.height = player.height;

  player.touchGroundTile = GAME.physics.arcade.collide(player, GAME.groundTilesGroup);
  player.onSlope = GAME.physics.arcade.collide(player, GAME.groundSlope);
  player.touchPlatform = GAME.physics.arcade.collide(player, GAME.platforms);

  player.hitPlatform = player.touchGroundTile || player.touchPlatform || player.onSlope;
  if (player.onSlope) { player.body.drag.setTo(500,500); } else { player.body.drag.setTo(250,0); }
  player.jumpType = player.body.touching.down && player.hitPlatform ? 0 : player.jumpType;

  if (player.direction === 'right'){
    player.scale.x = 1;
  } else if (player.direction === 'left'){
    player.scale.x = -1;
  }

  if (controls.buttons.B.isDown && (player.jumptimeStart != -1))
   {
       if (GAME.time.time - player.jumptimeStart > 175) {
           player.jumptimeStart = -1;
       } else {
           player.body.velocity.y = (Math.abs(player.body.velocity.x) >= 125) ? -290 : ((Math.abs(player.body.velocity.x) >= 75) ? -265 : -250);
       }
   }

   if (controls.buttons.A.isDown && (player.jumptimeStart != -1))
   {
       if (GAME.time.time - player.jumptimeStart > 200) {
           player.jumptimeStart = -1;
       } else {
        player.body.velocity.y = (Math.abs(player.body.velocity.x) >= 125) ? -240 : ((Math.abs(player.body.velocity.x) >= 75) ? -215 : -200);
       }
   }

  if (controls.cursors.left.isDown && !((controls.cursors.up.isDown || controls.cursors.down.isDown))){
    player.direction = 'left';
    player.body.maxVelocity.x = controls.buttons.Y.isDown ? 125 : 75;
    player.body.acceleration.x = controls.buttons.Y.isDown ? -500 : -500;
    player.body.acceleration.x = player.onSlope ? -10000 : player.body.acceleration.x;
  }
  else if (controls.cursors.right.isDown && !((controls.cursors.up.isDown || controls.cursors.down.isDown)))
  {
    player.direction = 'right';
    player.body.maxVelocity.x = controls.buttons.Y.isDown ? 125 : 75;
    player.body.acceleration.x = controls.buttons.Y.isDown ? 500 : 500;
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

  if (controls.cursors.up.isDown && player.body.touching.down && player.hitPlatform)
  {
    player.frame = 9;
  }
  else if (controls.cursors.down.isDown && player.body.touching.down && player.hitPlatform)
  {
    player.frame = 49;
  }

  // Coin collisions
  // GAME.physics.arcade.collide(coins, GAME.platforms);
  // GAME.physics.arcade.overlap(player, coins, collectCoin, null, this);

  GAME.physics.arcade.collide(player, GAME.tilesGroup);
  GAME.physics.arcade.collide(player, GAME.blocksGroup);
}

mechanics.spin = function () {
	GAME.player.jumpType = 2;
	if (GAME.player.hitPlatform)
	 {
			 GAME.player.jumptimeStart = GAME.time.time;
			 GAME.player.body.velocity.y = -200;
			 sound.spinSFX.play();
			 GAME.player.animations.play('spin');
	 }
}

mechanics.jump = function () {
	GAME.player.jumpType = 1;
	if (GAME.player.hitPlatform)
	 {
			 GAME.player.jumptimeStart = GAME.time.time;
			 GAME.player.body.velocity.y = -250;
			 sound.jumpSFX.play();
	 }
}

export default mechanics;
