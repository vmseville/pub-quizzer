import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Categories, QuestionTypes } from '../shared/options';
import { Settings } from '../shared/models/settings';

@Component({
  selector: 'qzr-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.scss'],
})
export class GameSetupComponent implements OnInit {
  readonly categories = Categories;
  readonly questionTypes = QuestionTypes;

  setupForm = this.formBuilder.nonNullable.group({
    numberOfQuestions: this.formBuilder.nonNullable.group({
      easy: [1, [Validators.min(1), Validators.max(10)]],
      medium: [1, [Validators.min(1), Validators.max(10)]],
      hard: [1, [Validators.min(1), Validators.max(10)]],
    }),
    categories: [[], [Validators.minLength(1)]],
    // categories: [[], [Validators.minLength(1)]],
    questionTypes: [[], [Validators.minLength(1)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.setupForm.valueChanges.subscribe((groupValue) => {
      console.log(`VALUE: ${JSON.stringify(groupValue)}`);
    });
  }
}
