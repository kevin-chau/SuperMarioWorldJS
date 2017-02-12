export default class Boot extends Phaser.State {

    preload() {
        // this.game.stage.backgroundColor = '#000';
        // this.load.image('loaderBg', 'img/loader-bg.png');
        // this.load.image('loaderBar', 'img/loader-bar.png');
    }

    create() {
        // Scale
        this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        this.scale.setUserScale(2, 2);

        // enable crisp rendering
        Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)

        // Physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        // Debug
        this.game.add.plugin(Phaser.Plugin.Debug);

        // Start Prelod State
        this.state.start('Preload');
    }

}
