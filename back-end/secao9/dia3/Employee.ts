import Enrollable from "./Enrollable"
import Person from "./Person"

export default class Employee extends Person implements Enrollable {
  private _enrollment: string
  private _salary: number
  private _admissionDate: Date

  constructor(name: string, birthDate: Date, salary: number) {
    if (salary < 0) throw new Error('Salário não pode ser negativo')
    super(name, birthDate)
    this._salary = salary
    const enrollment = this.generateEnrollment()
    this._enrollment = enrollment
  }

  public generateEnrollment (): string {
    const letters = this.name[0] + this.name.split(" ")[1][0]
    const number = this.name.length * Math.round(Math.random() * 100) * this.birthDate.getTime() / 1000;
    return `${letters}-${number}`
  }

  get enrollment(): string { return this._enrollment }
  get salary() { return this._salary} 
  get admissionDate() { return this._admissionDate }

  set salary(value: number) {
    if (value < 0) throw new Error('Salário não pode ser negativo')
    this._salary = value
  }

  set admissionDate(value: Date) {
    if (value > new Date()) throw new Error('Data não pode ser no futuro')
    this._admissionDate = value
  }
}