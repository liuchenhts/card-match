export class Card {
  id: string;
  shown = false;
  previouslyOpened = false;

  constructor(id: string) {
    this.id = id;
  }

  static of(id: string): Card {
    return new Card(id);
  }

  public isShown() {
    return this.shown;
  }
  public show() {
    this.shown = true;
  }

  public hide() {
    this.shown = false;
  }

  public isPreviouslyOpened() {
    return this.previouslyOpened;
  }
  public setPreviouslyOpened(opened: boolean) {
    return this.previouslyOpened = opened;
  }

  public equal(card: Card) {
    return (this.id === card.id);
  }
}
