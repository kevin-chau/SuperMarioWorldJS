var preloader = {};

preloader.preload = function () {

};

preloader.create = function () {
  this.game.state.start('game');
};

module.exports = preloader;
