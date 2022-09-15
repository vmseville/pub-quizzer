import { Component, OnInit } from '@angular/core';
import { GameSettingsService } from '../game-settings.service';
import { QuestionSet } from '../shared/models/question';

@Component({
  selector: 'qzr-game-stage',
  templateUrl: './game-stage.component.html',
  styleUrls: ['./game-stage.component.scss'],
})
export class GameStageComponent implements OnInit {
  gameQuestions: QuestionSet;

  constructor(private gameSettingsService: GameSettingsService) {}

  ngOnInit(): void {
    this.gameQuestions = this.gameSettingsService.questionSet;
  }
}
