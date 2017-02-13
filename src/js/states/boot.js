import constants from '../objects/constants';
import GAME from '../game';

export default class Boot extends Phaser.State {

    preload() {
    }

    create() {
        // Scale
        this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        this.scale.setUserScale(2, 2);

        // enable crisp rendering
        GAME.renderer.renderSession.roundPixels = true;
        Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)

        // Bounds
        this.world.setBounds(0, 0, constants.MAP_WIDTH, constants.MAP_HEIGHT);

        // Physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        // Slopes
        this.game.add.plugin(Phaser.Plugin.ArcadeSlopes);

        // Debug
        // this.game.add.plugin(Phaser.Plugin.Debug);

        // Start Prelod State
        this.state.start('Preload');
    }

}
