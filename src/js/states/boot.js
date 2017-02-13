export default class Boot extends Phaser.State {

    preload() {
    }

    create() {
        // Scale
        this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        this.scale.setUserScale(1, 1);

        // enable crisp rendering
        Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)

        // Physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        // Slopes
        this.game.add.plugin(Phaser.Plugin.ArcadeSlopes);

        // Debug
        this.game.add.plugin(Phaser.Plugin.Debug);

        // Start Prelod State
        this.state.start('Preload');
    }

}
