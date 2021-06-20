import { Card } from "./card.model";
import { Timer } from "./timer.model";

export class GameState {

  private cards: Card[][];
  private timer: Timer;
  private clickCount = 0;
  private firstCard: Card;
  private numberOfCardsMatched = 0;
  private gameStarted = false;

  private numberOfCards = 36;

  constructor() {

    this.cards = [
      [Card.of('2_of_hearts'), Card.of('3_of_clubs'), Card.of('5_of_diamonds'),
      Card.of('6_of_spades'), Card.of('2_of_hearts'), Card.of('2_of_hearts')],

      [Card.of('queen_of_hearts'), Card.of('ace_of_spades'), Card.of('king_of_spades'),
      Card.of('red_joker'), Card.of('king_of_spades'), Card.of('king_of_spades')],

      [Card.of('5_of_diamonds'), Card.of('2_of_hearts'), Card.of('ace_of_spades'),
      Card.of('red_joker'), Card.of('5_of_diamonds'), Card.of('5_of_diamonds')],

      [Card.of('6_of_spades'), Card.of('king_of_spades'), Card.of('queen_of_hearts'),
      Card.of('3_of_clubs'), Card.of('king_of_spades'), Card.of('king_of_spades')],

      [Card.of('5_of_diamonds'), Card.of('2_of_hearts'), Card.of('ace_of_spades'),
      Card.of('red_joker'), Card.of('5_of_diamonds'), Card.of('5_of_diamonds')],

      [Card.of('5_of_diamonds'), Card.of('2_of_hearts'), Card.of('ace_of_spades'),
      Card.of('red_joker'), Card.of('5_of_diamonds'), Card.of('5_of_diamonds')],
    ];

    this.timer = new Timer();
  }

  public getCards() {
    return this.cards;
  }

  public getTimer() {
    return this.timer;
  }

  public getClickCount() {
    return this.clickCount;
  }

  public increaseClickCount() {
    this.clickCount++;
  }

  public resetClickCount() {
    this.clickCount = 0;
  }

  public getFirstCard() {
    return this.firstCard;
  }

  public setFirstCard(card: Card) {
    this.firstCard = card;
  }

  public isMatchedWithFirstCard(card: Card): boolean {
    return this.firstCard.equal(card);
  }

  public increaseNumberOfCardsMatched() {
    this.numberOfCardsMatched += 2;
  }

  public increaseTimerIfCardsPreviouslyOpened(card: Card) {
    if (this.firstCard.isPreviouslyOpened() || card.isPreviouslyOpened()) {
      this.timer.tick(5);
    }
  }

  public getNumberOfCardsMatched() {
    return this.numberOfCardsMatched;
  }

  public isGameOver() {
    return this.numberOfCardsMatched === this.numberOfCards;
  }

  public isGameStarted() {
    return this.gameStarted;
  }

  public startGame() {
    this.gameStarted = true;
  }

}
