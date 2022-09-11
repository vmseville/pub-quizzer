import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Question, QuestionSet } from './shared/models/question';
import { Settings } from './shared/models/settings';

type OpenTriviaResponse = {
  response_code: number;
  results: Question[];
};

@Injectable({
  providedIn: 'root',
})
export class OpenTriviaService {
  openTriviaUrl = 'https://opentdb.com/api.php';

  constructor(private http: HttpClient) {}

  getQuestionSet(settings: Settings): Observable<QuestionSet> {
    const { easy, medium, hard } = settings.numberOfQuestions;
    return forkJoin({
      easy: this.getQuestions(
        'easy',
        easy,
        settings.categories[0],
        settings.questionTypes[0]
      ),
      medium: this.getQuestions(
        'medium',
        medium,
        settings.categories[0],
        settings.questionTypes[0]
      ),
      hard: this.getQuestions(
        'hard',
        hard,
        settings.categories[0],
        settings.questionTypes[0]
      ),
    });
  }

  getQuestions(
    difficulty: string,
    amount: number,
    category: number,
    type: string
  ): Observable<Question[]> {
    const url = `${this.openTriviaUrl}?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;

    return this.http
      .get<OpenTriviaResponse>(url)
      .pipe(map(({ results }) => results));
  }
}
