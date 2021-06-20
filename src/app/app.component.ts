import { GameState } from './model/game-state.model';
import { Component, OnInit } from '@angular/core';
import { GameService } from './service/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'card match';
  public gameState: GameState;

  constructor(private gameService: GameService) {

  }

  ngOnInit() {
    this.gameState = this.gameService.getGameState();
  }

  onStart() {
    this.gameService.startGame();
  }

  onReset() {
    window.location.reload();
  }
}
