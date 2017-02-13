(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _states = require('./states');

var states = _interopRequireWildcard(_states);

var _GameState = require('./states/GameState');

var _GameState2 = _interopRequireDefault(_GameState);

var _window = require('./objects/window');

var _window2 = _interopRequireDefault(_window);

var _constants = require('./objects/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Game = function (_Phaser$Game) {
	_inherits(Game, _Phaser$Game);

	function Game() {
		_classCallCheck(this, Game);

		var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, window.innerWidth / 2.05, _constants2.default.SNES_HEIGHT, Phaser.WEBGL, 'content', null));

		Object.keys(states).forEach(function (state) {
			return _this.state.add(state, states[state]);
		});
		_this.state.start('Boot');
		return _this;
	}

	return Game;
}(Phaser.Game);

var GAME = new Game();

$(window).resize(function () {
	(0, _window2.default)();
});

exports.default = GAME;

},{"./objects/constants":3,"./objects/window":4,"./states":7,"./states/GameState":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var RainbowText = function (_Phaser$Text) {
	_inherits(RainbowText, _Phaser$Text);

	function RainbowText(game, x, y, text) {
		_classCallCheck(this, RainbowText);

		var _this = _possibleConstructorReturn(this, (RainbowText.__proto__ || Object.getPrototypeOf(RainbowText)).call(this, game, x, y, text, { font: "45px Arial", fill: "#ff0044", align: "center" }));

		_this._speed = 125; //ms
		_this._colorIndex = 0;
		_this._colors = ['#ee4035', '#f37736', '#fdf498', '#7bc043', '#0392cf'];

		_this.colorize();
		_this.startTimer();

		_this.game.stage.addChild(_this);

		return _this;
	}

	_createClass(RainbowText, [{
		key: "startTimer",
		value: function startTimer() {
			this.game.time.events.loop(this._speed, this.colorize, this).timer.start();
		}
	}, {
		key: "colorize",
		value: function colorize() {

			for (var i = 0; i < this.text.length; i++) {

				if (this._colorIndex === this._colors.length) {
					this._colorIndex = 0;
				}

				this.addColor(this._colors[this._colorIndex], i);
				this._colorIndex++;
			}
		}
	}]);

	return RainbowText;
}(Phaser.Text);

exports.default = RainbowText;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var constants = {};

constants.SNES_WIDTH = 256;
constants.SNES_HEIGHT = 224;

exports.default = constants;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

var _game = require('../game');

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function resizeGame() {
    var size = {
        width: window.innerWidth / 2.05,
        height: _constants2.default.SNES_HEIGHT
    };
    _game2.default.width = size.width;
    _game2.default.height = size.height;
    _game2.default.canvas.width = size.width;
    _game2.default.canvas.height = size.height;
    _game2.default.scale.width = size.width;
    _game2.default.scale.height = size.height;
    _game2.default.renderer.resize(size.width, size.height);
    _game2.default.camera.setSize(size.width, size.height);
    _game2.default.camera.setBoundsToWorld();
}

exports.default = resizeGame;

},{"../game":1,"./constants":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _RainbowText = require("../objects/RainbowText");

var _RainbowText2 = _interopRequireDefault(_RainbowText);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var GameState = function (_Phaser$State) {
	_inherits(GameState, _Phaser$State);

	function GameState() {
		_classCallCheck(this, GameState);

		return _possibleConstructorReturn(this, (GameState.__proto__ || Object.getPrototypeOf(GameState)).apply(this, arguments));
	}

	_createClass(GameState, [{
		key: "create",
		value: function create() {
			var center = { x: this.game.world.centerX, y: this.game.world.centerY };
			var text = new _RainbowText2.default(this.game, center.x, center.y, "- phaser -\nwith a sprinkle of\nES6 dust!");
			text.anchor.set(0.5);
		}
	}]);

	return GameState;
}(Phaser.State);

exports.default = GameState;

},{"../objects/RainbowText":2}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Boot = function (_Phaser$State) {
    _inherits(Boot, _Phaser$State);

    function Boot() {
        _classCallCheck(this, Boot);

        return _possibleConstructorReturn(this, (Boot.__proto__ || Object.getPrototypeOf(Boot)).apply(this, arguments));
    }

    _createClass(Boot, [{
        key: 'preload',
        value: function preload() {
            // this.game.stage.backgroundColor = '#000';
            // this.load.image('loaderBg', 'img/loader-bg.png');
            // this.load.image('loaderBar', 'img/loader-bar.png');
        }
    }, {
        key: 'create',
        value: function create() {
            // Scale
            this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
            this.scale.setUserScale(2, 2);

            // enable crisp rendering
            Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);

            // Physics
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            // Slopes
            this.game.add.plugin(Phaser.Plugin.ArcadeSlopes);

            // Debug
            this.game.add.plugin(Phaser.Plugin.Debug);

            // Start Prelod State
            this.state.start('Preload');
        }
    }]);

    return Boot;
}(Phaser.State);

exports.default = Boot;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _boot = require('./boot');

Object.defineProperty(exports, 'Boot', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_boot).default;
  }
});

var _preload = require('./preload');

Object.defineProperty(exports, 'Preload', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_preload).default;
  }
});

var _menu = require('./menu');

Object.defineProperty(exports, 'Menu', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_menu).default;
  }
});

var _play = require('./play');

Object.defineProperty(exports, 'Play', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_play).default;
  }
});

var _over = require('./over');

Object.defineProperty(exports, 'Over', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_over).default;
  }
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

},{"./boot":6,"./menu":8,"./over":9,"./play":10,"./preload":11}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

// import TextButton from '../extensions/textbutton';

var Menu = function (_Phaser$State) {
    _inherits(Menu, _Phaser$State);

    function Menu() {
        _classCallCheck(this, Menu);

        return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
    }

    _createClass(Menu, [{
        key: "create",
        value: function create() {

            // this.music = this.game.add.audio('menuMusic');
            //
            // this.title = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY-200, 'Shoot\'Em Up', {
            //     font: '36px Tahoma',
            //     fill: 'white',
            //     align: 'center'
            // });
            // this.title.anchor.setTo(0.5);
            //
            // this.start = new TextButton({
            //     game: this.game,
            //     x: this.game.world.centerX,
            //     y: this.game.world.centerY,
            //     asset: 'button',
            //     overFrame: 2,
            //     outFrame: 1,
            //     downFrame: 0,
            //     upFrame: 1,
            //     label: 'Start',
            //     style: {
            //         font: '16px Verdana',
            //         fill: 'white',
            //         align: 'center'
            //     }
            // });
            //
            // this.btnOverSound = this.add.sound('menuOver');
            // this.btnOutSound = this.add.sound('menuOut');
            // this.btnDownSound = this.add.sound('menuDown');
            //
            // this.start.setOverSound(this.btnOverSound);
            // this.start.setOutSound(this.btnOutSound);
            // this.start.setDownSound(this.btnDownSound);
            //
            // this.start.onInputUp.add(()=>{
            //     this.music.stop();
            //     this.state.start('Play');
            //
            // });
            //
            // this.menuPanel = this.add.group();
            // this.menuPanel.add(this.title);
            // this.menuPanel.add(this.start);
            //
            // this.music.loopFull();
        }
    }]);

    return Menu;
}(Phaser.State);

exports.default = Menu;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

// import TextButton from '../extensions/textbutton';

var Over = function (_Phaser$State) {
    _inherits(Over, _Phaser$State);

    function Over() {
        _classCallCheck(this, Over);

        return _possibleConstructorReturn(this, (Over.__proto__ || Object.getPrototypeOf(Over)).apply(this, arguments));
    }

    _createClass(Over, [{
        key: "create",
        value: function create() {

            // this.gameOverTitle = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY-200, 'Game over', {
            //     font: '36px Tahoma',
            //     fill: 'white',
            //     align: 'center'
            // });
            // this.gameOverTitle.anchor.setTo(0.5);
            //
            // this.start = new TextButton({
            //     game: this.game,
            //     x: this.game.world.centerX,
            //     y: this.game.world.centerY-30,
            //     asset: 'button',
            //     overFrame: 2,
            //     outFrame: 1,
            //     downFrame: 0,
            //     upFrame: 1,
            //     label: 'Try again',
            //     style: {
            //         font: '16px Verdana',
            //         fill: 'white',
            //         align: 'center'
            //     }
            // });
            //
            // this.menu = new TextButton({
            //     game: this.game,
            //     x: this.game.world.centerX,
            //     y: this.game.world.centerY+30,
            //     asset: 'button',
            //     overFrame: 2,
            //     outFrame: 1,
            //     downFrame: 0,
            //     upFrame: 1,
            //     label: 'Menu',
            //     style: {
            //         font: '16px Verdana',
            //         fill: 'white',
            //         align: 'center'
            //     }
            // });
            //
            // this.btnOverSound = this.add.sound('menuOver');
            // this.btnOutSound = this.add.sound('menuOut');
            // this.btnDownSound = this.add.sound('menuDown');
            //
            // this.start.setOverSound(this.btnOverSound);
            // this.start.setOutSound(this.btnOutSound);
            // this.start.setDownSound(this.btnDownSound);
            // this.menu.setOverSound(this.btnOverSound);
            // this.menu.setOutSound(this.btnOutSound);
            // this.menu.setDownSound(this.btnDownSound);
            //
            // this.start.onInputDown.add(()=>{
            //     this.state.start('Play');
            // });
            //
            // this.menu.onInputDown.add(()=>{
            //     this.state.start('Menu');
            // });
            //
            // this.gameOverPanel = this.add.group();
            // this.gameOverPanel.add(this.gameOverTitle);
            // this.gameOverPanel.add(this.start);
            // this.gameOverPanel.add(this.menu);
        }
    }]);

    return Over;
}(Phaser.State);

exports.default = Over;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

// import Player from '../prefabs/player';
// import Enemy from '../prefabs/enemy';
// import HUD from '../prefabs/hud';

var Play = function (_Phaser$State) {
    _inherits(Play, _Phaser$State);

    function Play() {
        _classCallCheck(this, Play);

        return _possibleConstructorReturn(this, (Play.__proto__ || Object.getPrototypeOf(Play)).apply(this, arguments));
    }

    _createClass(Play, [{
        key: "create",
        value: function create() {

            // this.farback = this.add.tileSprite(0, 0, 800, 2380, 'farback');
            //
            // this.game.time.slowMotion = 1;
            //
            // this.enemies = this.add.group();
            // this.enemies.enableBody = true;
            //
            // this.player = new Player({
            //     game: this.game,
            //     x: this.game.world.centerX,
            //     y: 0.92 * this.game.world.height,
            //     health: 100,
            //     asset: 'smallfighter',
            //     frame: 1
            // });
            // this.game.stage.addChild(this.player);
            //
            // this.hud = new HUD({
            //     game: this.game,
            //     player: this.player
            // });
            //
            // this.game.input.onDown.add(() => {
            //     this.game.time.slowMotion = 1;
            // });
            //
            // this.game.input.onUp.add(() => {
            //     this.game.time.slowMotion = 3;
            // });
            //
            // this.enemyTime = 0;
            // this.enemyInterval = 1.5;
            // this.enemyShootTime = 0;
            // this.enemyShootInterval = 1;
            // this.playerShootTime = 0;
            // this.playerShootInterval = 0.16;
            //
            // this.game.time.events.loop(Phaser.Timer.SECOND * 10, () => {
            //     if(this.enemyInterval > 0.2 ){
            //         this.enemyInterval -= 0.1;
            //     }
            // });
            //
            // this.overlayBitmap = this.add.bitmapData(this.game.width, this.game.height);
            // this.overlayBitmap.ctx.fillStyle = '#000';
            // this.overlayBitmap.ctx.fillRect(0, 0, this.game.width, this.game.height);
            //
            // this.overlay = this.add.sprite(0, 0, this.overlayBitmap);
            // this.overlay.visible = false;
            // this.overlay.alpha = 0.75;
            //
            // this.music = this.game.add.audio('playMusic');
            // this.bulletHitSound = this.add.sound('bulletHit');
            // this.enemyExplosionSound = this.add.sound('enemyExplosion');
            // this.playerExplosionSound = this.add.sound('playerExplosion');
            // this.gameOverSound = this.add.sound('gameOver');
            //
            // this.music.loopFull();
        }
    }, {
        key: "update",
        value: function update() {}
        //
        // this.enemyTime += this.game.time.physicsElapsed;
        // this.enemyShootTime += this.game.time.physicsElapsed;
        // this.playerShootTime += this.game.time.physicsElapsed;
        //
        // if (this.enemyTime > this.enemyInterval) {
        //     this.enemyTime = 0;
        //
        //     this.createEnemy({
        //         game: this.game,
        //         x: this.game.rnd.integerInRange(6, 76) * 10,
        //         y: 0,
        //         speed: {
        //             x: this.game.rnd.integerInRange(5, 10) * 10 * (Math.random() > 0.5 ? 1 : -1),
        //             y: this.game.rnd.integerInRange(5, 10) * 10
        //         },
        //         health: 9,
        //         bulletSpeed: this.game.rnd.integerInRange(10, 20) * 10,
        //         asset: 'alien'
        //     });
        // }
        //
        // if (this.enemyShootTime > this.enemyShootInterval) {
        //     this.enemyShootTime = 0;
        //     this.enemies.forEachAlive(enemy => enemy.shoot());
        //     if (!this.player.alive) {
        //         this.game.world.bringToTop(this.overlay);
        //     }
        // }
        //
        // if (this.playerShootTime > this.playerShootInterval) {
        //     this.playerShootTime = 0;
        //     if (this.player.alive) {
        //         this.player.shoot();
        //     }
        // }
        //
        // this.game.physics.arcade.overlap(this.player.bullets, this.enemies, this.hitEnemy, null, this);
        //
        // this.game.physics.arcade.overlap(this.player, this.enemies, this.crashEnemy, null, this);
        //
        // this.enemies.forEach(enemy => this.game.physics.arcade.overlap(this.player, enemy.bullets, this.hitPlayer, null, this));
        //
        // this.farback.tilePosition.y += 3;


        // createEnemy(data) {
        //
        //     let enemy = this.enemies.getFirstExists(false);
        //
        //     if (!enemy) {
        //         enemy = new Enemy(data);
        //         this.enemies.add(enemy);
        //     }
        //     enemy.reset(data);
        // }
        //
        // hitEffect(obj, color) {
        //     let tween = this.game.add.tween(obj);
        //     let emitter = this.game.add.emitter();
        //     let emitterPhysicsTime = 0;
        //     let particleSpeed = 100;
        //     let maxParticles = 10;
        //
        //     tween.to({tint: 0xff0000}, 100);
        //     tween.onComplete.add(() => {
        //         obj.tint = 0xffffff;
        //     });
        //     tween.start();
        //
        //     emitter.x = obj.x;
        //     emitter.y = obj.y;
        //     emitter.gravity = 0;
        //     emitter.makeParticles('particle');
        //
        //     if (obj.health <= 0) {
        //         particleSpeed = 200;
        //         maxParticles = 40;
        //         color = 0xff0000;
        //     }
        //
        //     emitter.minParticleSpeed.setTo(-particleSpeed, -particleSpeed);
        //     emitter.maxParticleSpeed.setTo(particleSpeed, particleSpeed);
        //     emitter.start(true, 500, null, maxParticles);
        //     emitter.update = () => {
        //         emitterPhysicsTime += this.game.time.physicsElapsed;
        //         if(emitterPhysicsTime >= 0.6){
        //             emitterPhysicsTime = 0;
        //             emitter.destroy();
        //         }
        //
        //     };
        //     emitter.forEach(particle => particle.tint = color);
        //     if (!this.player.alive) {
        //         this.game.world.bringToTop(this.overlay);
        //     }
        // }
        //
        // hitEnemy(bullet, enemy) {
        //     this.bulletHitSound.play("",0,0.5);
        //     enemy.damage(bullet.health);
        //     this.hitEffect(enemy, bullet.tint);
        //     if (!enemy.alive) {
        //         this.enemyExplosionSound.play("",0,0.5);
        //         this.hud.updateScore(enemy.maxHealth);
        //     }
        //     bullet.kill();
        // }
        //
        // hitPlayer(player, bullet) {
        //     this.bulletHitSound.play("",0,0.5);
        //     player.damage(bullet.health);
        //     this.hud.updateHealth();
        //     this.hitEffect(player, bullet.tint);
        //     if (!player.alive) {
        //         this.playerExplosionSound.play();
        //         this.gameOver();
        //     }
        //     bullet.kill();
        // }
        //
        // crashEnemy(player, enemy) {
        //     enemy.damage(enemy.health);
        //     player.damage(enemy.health);
        //     this.hitEffect(player);
        //     this.hitEffect(enemy);
        //     if (!enemy.alive) {
        //         this.enemyExplosionSound.play("",0,0.5);
        //         this.hud.updateScore(enemy.maxHealth);
        //     }
        //     this.hud.updateHealth();
        //     if (!player.alive) {
        //         this.playerExplosionSound.play();
        //         this.gameOver();
        //     }
        // }
        //
        // gameOver(){
        //     this.game.time.slowMotion = 3;
        //     this.overlay.visible = true;
        //     this.game.world.bringToTop(this.overlay);
        //     let timer = this.game.time.create(this.game, true);
        //     timer.add(3000, () => {
        //         this.music.stop();
        //         this.gameOverSound.play();
        //         this.game.state.start('Over');
        //     });
        //     timer.start();
        // }

    }]);

    return Play;
}(Phaser.State);

exports.default = Play;

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Preload = function (_Phaser$State) {
    _inherits(Preload, _Phaser$State);

    function Preload() {
        _classCallCheck(this, Preload);

        return _possibleConstructorReturn(this, (Preload.__proto__ || Object.getPrototypeOf(Preload)).apply(this, arguments));
    }

    _createClass(Preload, [{
        key: 'preload',
        value: function preload() {

            // this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
            // this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');
            // this.loaderBg.anchor.setTo(0.5);
            // this.loaderBar.anchor.setTo(0.5);
            //
            // this.load.setPreloadSprite(this.loaderBar);
            //
            // this.load.atlasJSONArray('smallfighter', 'img/spritesheet/smallfighter.png', 'data/spritesheet/smallfighter.json');
            // this.load.atlasJSONArray('alien', 'img/spritesheet/alien.png', 'data/spritesheet/alien.json');
            // this.load.atlasJSONArray('button', 'img/spritesheet/button.png', 'data/spritesheet/button.json');
            // this.load.image('farback', 'img/farback.jpg');
            // this.load.image('bullet', 'img/bullet.png');
            // this.load.image('particle', 'img/particle.gif');
            // this.load.image('healthbar', 'img/healthbar.png');
            // this.load.image('hudBg', 'img/hud-bg.png');
            //
            // this.load.audio('playMusic', ['audio/music/play.mp3']);
            // this.load.audio('menuMusic', ['audio/music/menu.mp3']);
            //
            // this.load.audio('menuOver', ['audio/sound/menu-over.mp3']);
            // this.load.audio('menuOut', ['audio/sound/menu-out.mp3']);
            // this.load.audio('menuDown', ['audio/sound/menu-click.mp3']);
            //
            // this.load.audio('bulletHit', ['audio/sound/bullet-hit.mp3']);
            // this.load.audio('enemyShot', ['audio/sound/enemy-shot.mp3']);
            // this.load.audio('enemyExplosion', ['audio/sound/enemy-explosion.mp3']);
            // this.load.audio('playerShot', ['audio/sound/player-shot.mp3']);
            // this.load.audio('playerExplosion', ['audio/sound/player-explosion.mp3']);
            //
            // this.load.audio('gameOver', ['audio/sound/game-over.mp3']);

        }
    }, {
        key: 'create',
        value: function create() {
            this.state.start('Menu');
        }
    }]);

    return Preload;
}(Phaser.State);

exports.default = Preload;

},{}]},{},[1])
//# sourceMappingURL=game.js.map
