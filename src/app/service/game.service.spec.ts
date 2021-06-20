import { TestBed } from '@angular/core/testing';
import { Card } from '../model/card.model';
import { GameService } from './game.service';


describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should do nothing before game started', () => {
    service.process(service.getGameState().getCards()[0][0]);
    expect(service.getGameState().getClickCount()).toBe(0);
  });


  it('should not match if click two differnt cards', () => {
    service.startGame();
    let card = service.getGameState().getCards()[0][0];
    service.process(card);
    expect(service.getGameState().getClickCount()).toBe(1);
    expect(service.getGameState().getFirstCard()).toEqual(service.getGameState().getCards()[0][0]);
    expect(service.getGameState().getNumberOfCardsMatched()).toBe(0);

    let secondCard = service.getGameState().getCards()[2][0];
    service.process(secondCard);
    expect(service.getGameState().getNumberOfCardsMatched()).toBe(0);
    expect(service.getGameState().isGameOver()).toBe(false);
    expect(card.isPreviouslyOpened()).toBe(true);
    expect(secondCard.isPreviouslyOpened()).toBe(true);
  });

  it('should match if click two same cards', () => {
    service.startGame();
    let card = service.getGameState().getCards()[0][0];
    service.process(card);
    expect(service.getGameState().getClickCount()).toBe(1);
    expect(service.getGameState().getFirstCard()).toEqual(card);
    expect(service.getGameState().getNumberOfCardsMatched()).toBe(0);

    let secondCard = service.getGameState().getCards()[2][1];
    service.process(secondCard);
    expect(service.getGameState().getNumberOfCardsMatched()).toBe(2);
    expect(service.getGameState().isGameOver()).toBe(false);
    expect(card.isPreviouslyOpened()).toBe(false);
    expect(secondCard.isPreviouslyOpened()).toBe(false);
  });



  it('should game over if all cards matched', () => {

    service.startGame();
    service.process(service.getGameState().getCards()[0][0]);
    service.process(service.getGameState().getCards()[2][1]);
    service.process(service.getGameState().getCards()[0][1]);
    service.process(service.getGameState().getCards()[3][3]);
    service.process(service.getGameState().getCards()[0][2]);
    service.process(service.getGameState().getCards()[2][0]);
    service.process(service.getGameState().getCards()[0][3]);
    service.process(service.getGameState().getCards()[3][0]);
    service.process(service.getGameState().getCards()[0][4]);
    service.process(service.getGameState().getCards()[0][5]);

    service.process(service.getGameState().getCards()[1][0]);
    service.process(service.getGameState().getCards()[3][2]);
    service.process(service.getGameState().getCards()[1][1]);
    service.process(service.getGameState().getCards()[2][2]);
    service.process(service.getGameState().getCards()[1][2]);
    service.process(service.getGameState().getCards()[3][1]);
    service.process(service.getGameState().getCards()[1][3]);
    service.process(service.getGameState().getCards()[2][3]);
    service.process(service.getGameState().getCards()[1][4]);
    service.process(service.getGameState().getCards()[1][5]);

    service.process(service.getGameState().getCards()[2][4]);
    service.process(service.getGameState().getCards()[2][5]);

    service.process(service.getGameState().getCards()[3][4]);
    service.process(service.getGameState().getCards()[3][5]);

    service.process(service.getGameState().getCards()[4][0]);
    service.process(service.getGameState().getCards()[5][0]);
    service.process(service.getGameState().getCards()[4][1]);
    service.process(service.getGameState().getCards()[5][1]);
    service.process(service.getGameState().getCards()[4][2]);
    service.process(service.getGameState().getCards()[5][2]);
    service.process(service.getGameState().getCards()[4][3]);
    service.process(service.getGameState().getCards()[5][3]);
    service.process(service.getGameState().getCards()[4][4]);
    service.process(service.getGameState().getCards()[5][4]);
    service.process(service.getGameState().getCards()[4][5]);
    service.process(service.getGameState().getCards()[5][5]);

    expect(service.getGameState().isGameOver()).toBe(true);
  });
});
