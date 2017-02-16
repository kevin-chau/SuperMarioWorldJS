import GAME from '../game';

export default class enemy {
  constructor(x, y, frame) {
    this.x = x;
    this.y = y;
    this.sprite = GAME.add.sprite(x, y, 'enemies', frame);
    this.direction;
  }
}
