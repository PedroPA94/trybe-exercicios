import Person from "./exercicio1";

class Student extends Person {
  private _enrollment: string
  private _examsGrades: number[]
  private _worksGrades: number[]

  constructor(name: string, birthDate: Date) {
    super(name, birthDate)
    const enrollment = this.generateEnrollment(name, birthDate)
    this._enrollment = enrollment
  }

  private generateEnrollment (name: string, birthDate: Date): string {
    const letters = name[0] + name.split(" ")[1][0]
    const number = name.length * Math.round(Math.random() * 100) * birthDate.getTime() / 1000;
    return `${letters}-${number}`
  }

  get enrollment(): string { return this._enrollment }
  get examsGrades(): number[] { return this._examsGrades }
  get worksGrades(): number[] { return this._worksGrades }

  set notasProvas(newValue: number[]) {
    if (newValue.length <= 4) this._examsGrades = (newValue)
    else throw new Error('É possível atribuir apenas quatro notas de provas');
  }

  set notasTrabalhos(newValue: number[]) {
    if (newValue.length <= 2) this._worksGrades = (newValue)
    else throw new Error('É possível atribuir apenas duas notas de trabalhos');
  }

  sumGrades() {
    return this._examsGrades.reduce((a, b) => a + b) + this._worksGrades.reduce((a, b) => a + b)
  }

  sumAverageGrade() {
    return Math.round(this.sumGrades() / (this._examsGrades.length + this._worksGrades.length))
  }
}
