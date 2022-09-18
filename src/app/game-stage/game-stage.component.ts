import { Component, OnInit } from '@angular/core';
import { GameSettingsService } from '../game-settings.service';
import { Question, QuestionSet } from '../shared/models/question';

@Component({
  selector: 'qzr-game-stage',
  templateUrl: './game-stage.component.html',
  styleUrls: ['./game-stage.component.scss'],
})
export class GameStageComponent implements OnInit {
  gameQuestions: QuestionSet;
  currentRound: 'easy' | 'medium' | 'hard';
  currentQuestion: Question;
  currQuestionIndex = 0;

  constructor(private gameSettingsService: GameSettingsService) {}

  ngOnInit(): void {
    this.gameQuestions = this.gameSettingsService.questionSet;
    this.currentRound = 'easy';
    this.currentQuestion =
      this.gameQuestions?.[this.currentRound][this.currQuestionIndex];
  }

  next() {
    this.currQuestionIndex = this.currQuestionIndex + 1;
    this.currentQuestion =
      this.gameQuestions?.[this.currentRound][this.currQuestionIndex];
  }
}
