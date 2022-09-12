import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { GameSettingsService } from '../game-settings.service';
import { OpenTriviaService } from '../open-trivia.service';
import { Settings } from '../shared/models/settings';
import { Categories, QuestionTypes } from '../shared/options';

@Component({
  selector: 'qzr-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.scss'],
})
export class GameSetupComponent implements OnInit {
  readonly categoriesOptions = Categories;
  readonly questionTypesOptions = QuestionTypes;

  settings: Settings;
  setupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private gameSettingsService: GameSettingsService,
    private openTriviaService: OpenTriviaService
  ) {
    this.setupForm = this.formBuilder.group({
      numberOfQuestions: this.formBuilder.group({
        easy: [1, [Validators.min(1), Validators.max(10)]],
        medium: [1, [Validators.min(1), Validators.max(10)]],
        hard: [1, [Validators.min(1), Validators.max(10)]],
      }),
      categories: ['', [Validators.required]],
      questionTypes: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.setupForm.valueChanges.subscribe((groupValue) => {
      this.settings = {
        ...groupValue,
        categories: [groupValue.categories],
        questionTypes: [groupValue.questionTypes],
      } as Settings;
      console.log(`VALUE: ${JSON.stringify(this.settings)}`);
    });
  }

  saveSettings() {
    this.gameSettingsService.setGameSettings(this.settings);
    this.openTriviaService
      .getQuestionSet(this.settings)
      .subscribe((questionSet) => {
        console.log(`SET: ${JSON.stringify(questionSet)}`);
      });
  }
}
