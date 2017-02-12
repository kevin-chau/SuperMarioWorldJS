function configCamera() {
  game.camera.height = SNES_HEIGHT + 16;
  game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER, 1, 1);
}
