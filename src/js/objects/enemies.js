import enemy from '../objects/enemy';
import GAME from '../game';

var enemies = {};

enemies.createEnemies = function() {
    GAME.enemy1 = new enemy(144, 369, 88);
    GAME.physics.arcade.enable(GAME.enemy1.sprite);
    GAME.enemy1.sprite.animations.add('walk', [88,109], 10, true);
    GAME.enemy1.sprite.animations.play('walk');
    GAME.enemy1.sprite.body.gravity.y = 1000;
}

enemies.updateEnemies = function (){
    GAME.enemy1.sprite.body.height = GAME.enemy1.sprite.height;
    GAME.physics.arcade.collide(GAME.enemy1.sprite, GAME.groundTilesGroup);
    GAME.physics.arcade.collide(GAME.enemy1.sprite, GAME.player);
}

export default enemies;
