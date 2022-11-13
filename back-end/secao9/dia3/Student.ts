import Enrollable from "./Enrollable"
import Evaluation from "./Evaluation"
import EvaluationResult from "./EvaluationResult"
import Person from "./Person"

export default class Student extends Person implements Enrollable {
  private _enrollment: string
  private _evaluationResults: EvaluationResult[]

  constructor(name: string, birthDate: Date) {
    super(name, birthDate)
    const enrollment = this.generateEnrollment()
    this._enrollment = enrollment
  }

  public generateEnrollment (): string {
    const letters = this.name[0] + this.name.split(" ")[1][0]
    const number = this.name.length * Math.round(Math.random() * 100) * this.birthDate.getTime() / 1000;
    return `${letters}-${number}`
  }

  get enrollment(): string { return this._enrollment }
  get evaluationResults() { return this._evaluationResults }

  public sumGrades() {
    return this._evaluationResults.reduce((a, b) => a + b.score, 0)
  }

  public sumAverageGrade() {
    return Math.round(this.sumGrades() / this._evaluationResults.length)
  }

  public addEvaluationResults(evaluation: Evaluation, score: number) {
    const newEvaluation = new EvaluationResult(evaluation, score)
    this._evaluationResults.push(newEvaluation)
  }
}