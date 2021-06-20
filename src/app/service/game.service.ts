import { GameState } from '../model/game-state.model';
import { Injectable } from '@angular/core';
import { Card } from '../model/card.model';
import { Timer } from '../model/timer.model';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gameState = new GameState();
  private timeInterval: any;

  constructor() {
  }

  public process(card: Card): void {

    if (!this.gameState.isGameStarted() || this.gameState.isGameOver()) {
      return;
    }

    if (card.isShown()) {
      return;
    }

    if (this.gameState.getClickCount() >= 2) {
      return;
    }

    this.gameState.increaseClickCount();
    card.show();

    if (this.gameState.getClickCount() === 1) {
      this.gameState.setFirstCard(card);
    }

    if (this.gameState.getClickCount() === 2) {

      if (this.gameState.isMatchedWithFirstCard(card)) {
        this.gameState.increaseNumberOfCardsMatched();
        this.gameState.resetClickCount();
        if (this.gameState.isGameOver()) {
          this.stopTimer();
        }
      } else {
        this.gameState.increaseTimerIfCardsPreviouslyOpened(card);
        this.gameState.getFirstCard().setPreviouslyOpened(true);
        card.setPreviouslyOpened(true);

        (async () => {
          await delay(1000);
          card.hide();
          this.gameState.getFirstCard().hide();
          this.gameState.resetClickCount();
        })();
      }
    }
  }

  public getGameState() {
    return this.gameState;
  }

  public getCards() {
    return this.gameState.getCards();
  }

  public getTimer(): Timer {
    return this.gameState.getTimer();
  }

  public startGame() {
    if (!this.gameState.isGameStarted()) {
      this.gameState.startGame();
      this.startTimer();
    }
  }

  private startTimer() {
    this.timeInterval = setInterval(() => {
      this.getTimer().tick(1);
    }, 1000);
  }

  private stopTimer() {
    clearInterval(this.timeInterval);
  }

}

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
