function createControls() {
  // Load arrow key controls
  cursors = game.input.keyboard.createCursorKeys();
  buttons = {
    'A': game.input.keyboard.addKey(Phaser.Keyboard.D),
    'B': game.input.keyboard.addKey(Phaser.Keyboard.S),
    'Y': game.input.keyboard.addKey(Phaser.Keyboard.A),
    'Mute': game.input.keyboard.addKey(Phaser.Keyboard.M)
  };
  buttons.B.onDown.add(jump, this);
  buttons.A.onDown.add(spin, this);
  buttons.Mute.onDown.add(mute, this);
}

function mute() {
	game.sound.mute = !game.sound.mute;
}
