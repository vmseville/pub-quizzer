export interface Settings {
  numberOfQuestions: {
    easy: number;
    medium: number;
    hard: number;
  };
  categories: number[];
  questionTypes: string[];
}
