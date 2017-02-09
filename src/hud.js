var scoreText;

function createHUD() {
  // scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000'});
  coin1HUD = game.add.sprite(200,15, 'hud'); // Y good, x needs adjustment
  coin1HUD.frame = 3;
  coin2HUD = game.add.sprite(209,16, 'hud'); // Y good, x needs adjustment
  coin2HUD.frame = 5;
}
