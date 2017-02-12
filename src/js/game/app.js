var SNES_WIDTH = 256;
var SNES_HEIGHT = 224;

var _ = require('lodash')
  , properties = require('./properties')
  , states =
    { boot: require('./states/boot.js')
    , preloader: require('./states/preloader.js')
    , game: require('./states/game.js')
    }
  , game = new Phaser.Game(window.innerWidth / 2.05, SNES_HEIGHT, Phaser.WEBGL, 'game');

// Automatically register each state.
_.each(states, function(state, key) {
  game.state.add(key, state);
});

game.state.start('boot');
