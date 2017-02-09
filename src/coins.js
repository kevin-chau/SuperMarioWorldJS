function createCoins() {
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
}

function collectCoin(player, coin) {
	coin.kill();
	coinSFX.play();

	score += 10;
	// scoreText.text = 'Score: ' + score;
}
