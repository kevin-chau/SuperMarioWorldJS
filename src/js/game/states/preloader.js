var preloader = {};

var loader = require('./loader');

preloader.preload = function () {
  loader.loader();
};


preloader.create = function () {
  this.game.state.start('game');
};

module.exports = preloader;
