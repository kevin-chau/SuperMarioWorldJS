$(window).resize(function() { window.resizeGame(); } );

function resizeGame() {
    var size = {
        width: window.innerWidth / 2.05,
        height: SNES_HEIGHT
    };
    game.width = size.width;
    game.height = size.height;
    game.canvas.width = size.width;
    game.canvas.height = size.height;
    game.scale.width = size.width;
    game.scale.height = size.height;
    game.renderer.resize(size.width, size.height);
    game.camera.setSize(size.width, size.height);
    game.camera.setBoundsToWorld();
    resizeTimeout = false;
}
