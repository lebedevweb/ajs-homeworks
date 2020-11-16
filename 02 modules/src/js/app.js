import {
  Game, GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame,
// eslint-disable-next-line import/extensions
} from './game.js';

console.log('app worked');

const game = new Game();
game.start();

console.log(GameSavingData, loadGame(), saveGame());
