import enemy from '../objects/enemy';
import GAME from '../game';

var enemies = {};

enemies.createEnemies = function() {
    GAME.enemy1 = new enemy(144, 369, 88);
    GAME.physics.arcade.enable(GAME.enemy1.sprite);
    GAME.enemy1.sprite.animations.add('walk', [88,109], 10, true);
    GAME.enemy1.sprite.animations.play('walk');
    GAME.enemy1.sprite.body.gravity.y = 1000;
    GAME.enemy1.sprite.anchor.setTo(.5,1);
    GAME.enemy1.sprite.body.drag.setTo(250,0);
}

enemies.updateEnemies = function (){
    GAME.enemy1.sprite.body.height = GAME.enemy1.sprite.height;
    GAME.physics.arcade.collide(GAME.enemy1.sprite, GAME.groundTilesGroup);
    GAME.physics.arcade.collide(GAME.enemy1.sprite, GAME.player);


    if (GAME.enemy1.sprite.x - GAME.player.x > 16){
      GAME.enemy1.sprite.scale.x = -1;
      GAME.enemy1.sprite.x -= 1;
    } else if (GAME.enemy1.sprite.x - GAME.player.x < -16) {
      GAME.enemy1.sprite.scale.x = 1;
      GAME.enemy1.sprite.x += 1;
    }
}

export default enemies;
