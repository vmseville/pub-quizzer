import { Injectable } from '@angular/core';
import { OpenTriviaService } from './open-trivia.service';
import { Settings } from './shared/models/settings';

@Injectable({
  providedIn: 'root',
})
export class GameSettingsService {
  gameSettings: Settings;

  constructor(private openTrivaService: OpenTriviaService) {}

  setGameSettings(settings: Settings) {
    this.gameSettings = settings;
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
