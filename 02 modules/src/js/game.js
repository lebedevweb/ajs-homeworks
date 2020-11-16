import defaultCharacter, { Character } from './domain.js';

export class Game {
  // eslint-disable-next-line class-methods-use-this
  start() {
    console.log('game started');
  }
}

export class GameSavingData {
}

export function readGameSaving() {
}

export function writeGameSaving() {
}

const defaultGame = new Game();

export default defaultGame;
