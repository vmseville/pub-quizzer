import { Injectable } from '@angular/core';
import { OpenTriviaService } from './open-trivia.service';
import { QuestionSet } from './shared/models/question';
import { Settings } from './shared/models/settings';

@Injectable({
  providedIn: 'root',
})
export class GameSettingsService {
  private _gameSettings: Settings;
  private _questionSet: QuestionSet;

  constructor(private openTrivaService: OpenTriviaService) {}

  get gameSettings(): Settings {
    return this._gameSettings;
  }

  set gameSettings(settings: Settings) {
    this._gameSettings = settings;
  }

  get questionSet(): QuestionSet {
    return this._questionSet;
  }

  set questionSet(questionSet: QuestionSet) {
    this._questionSet = questionSet;
  }

  clearGameSettings() {
    this.gameSettings = {
      numberOfQuestions: {
        easy: 1,
        medium: 1,
        hard: 1,
      },
      categories: [],
      questionTypes: [],
    } as Settings;
  }
}
