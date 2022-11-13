import Teacher from "./Teacher";

export default abstract class Evaluation {
  private _score: number
  public teacher: Teacher

  constructor(score: number, teacher: Teacher) {
    if (score < 0) throw new Error('Pontuação não pode ser negativa')
    this._score = score;
    this.teacher = teacher;
  }

  get score() { return this._score }

  set score(value: number) {
    if (value < 0) throw new Error('Pontuação não pode ser negativa')
    this._score = value
  }
}