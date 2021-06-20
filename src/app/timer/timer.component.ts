import { Component, OnInit } from '@angular/core';
import { Timer } from '../model/timer.model';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  public timer: Timer;
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.timer = this.gameService.getTimer();
  }

}
