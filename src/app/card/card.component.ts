import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Card } from '../model/card.model';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('card') card: Card;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.gameService.process(this.card);
  }

}
