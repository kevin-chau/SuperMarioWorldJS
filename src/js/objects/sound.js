import GAME from '../game';
import constants from './constants'

var sound = {};

sound.createSound = function() {
  // Intro
  // var intro = GAME.add.audio('Overworld Theme Intro');
  // intro.play();

  // Music
  var music = GAME.add.audio('Overworld Theme');
  if (constants.MUSIC_ON){
      music.play();
  }

  // Sound effects
  sound.jumpSFX = GAME.add.audio('Jump Wav');
  sound.coinSFX = GAME.add.audio('Coin Wav');
  sound.spinSFX = GAME.add.audio('Spin Wav');
}

export default sound;
