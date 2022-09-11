import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'qzr-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.scss'],
})
export class GameSetupComponent implements OnInit {
  setupForm = this.formBuilder.group({
    numberOfQuestions: this.formBuilder.group({
      easy: [1, [Validators.min(1), Validators.max(10)]],
      medium: [1, [Validators.min(1), Validators.max(10)]],
      hard: [1, [Validators.min(1), Validators.max(10)]],
    }),
    categories: [[], [Validators.minLength(1)]],
    questionTypes: [[], [Validators.minLength(1)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.setupForm.valueChanges.subscribe((groupValue) => {
      console.log(`VALUE: ${JSON.stringify(groupValue)}`);
    });
  }
}
