import GAME from '../game';

var sound = {};

sound.createSound = function() {
  // Music
  var music = GAME.add.audio('Overworld Theme');
  music.play();

  // Sound effects
  sound.jumpSFX = GAME.add.audio('Jump Wav');
  sound.coinSFX = GAME.add.audio('Coin Wav');
  sound.spinSFX = GAME.add.audio('Spin Wav');
}

export default sound;
