import constants from './constants';
import GAME from '../game';

var resize = {}

resize.resizeGame = function () {
    var size = {
        width: window.innerWidth / 2.05,
        height: constants.SNES_HEIGHT
    };
    GAME.width = size.width;
    GAME.height = size.height;
    GAME.canvas.width = size.width;
    GAME.canvas.height = size.height;
    GAME.scale.width = size.width;
    GAME.scale.height = size.height;
    GAME.renderer.resize(size.width, size.height);
    GAME.camera.setSize(size.width, size.height);
    GAME.camera.setBoundsToWorld();
}

export default resize;
