import Person from "./exercicio1";
import Employee from "./exercicio3";
import Subject from "./exercicio4";

export default class Teacher extends Person implements Employee {
  public subject: Subject
  private _registration: string
  private _salary: number
  private _admissionDate: Date

  constructor(salary: number, subject: Subject, name: string, birthDate: Date) {
    if (salary < 0) throw new Error('Salário não pode ser negativo')
    super(name, birthDate);
    this.subject = subject;
    this._salary = salary
    this._registration = this.generateRegistration()
    this._admissionDate = new Date();
  }

  public generateRegistration() {
    const letters = this.name[0] + this.name.split(" ")[1][0]
    const number = this.name.length * Math.round(Math.random() * 100) * this.birthDate.getTime();
    return `${letters}-${number}`
  }

  get registration() { return this._registration }
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