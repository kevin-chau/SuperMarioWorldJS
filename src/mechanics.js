function updateMechanics(){
  player.body.height = player.height;
  // player.body.width = player.width; // this makes players fall through
  player.onSlope = game.physics.arcade.collide(player, game.groundSlope);

  player.hitPlatform = game.physics.arcade.collide(player, groundTilesGroup) || game.physics.arcade.collide(player, platforms) || player.onSlope;
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
  game.physics.arcade.collide(player, tilesGroup);
  game.physics.arcade.collide(player, blocksGroup);
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
