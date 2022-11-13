import Evaluation from "./Evaluation";

export default class EvaluationResult {
  private _evaluation: Evaluation
  private _score: number

  constructor(evaluation: Evaluation, score: number) {
    this._evaluation = evaluation;
    this.validateScore(score)
    this._score = score;
  }

  private validateScore(score: number) {
    if (score < 0) throw new Error('Pontuação não pode ser negativa');
    if (score > this._evaluation.score) throw new Error('Pontuação não pode ser maior que a da avaliação');
  }

  get evaluation() { return this._evaluation }
  get score() { return this._score }

  set score(value: number) {
    this.validateScore(value)
    this._score = value
  }
}