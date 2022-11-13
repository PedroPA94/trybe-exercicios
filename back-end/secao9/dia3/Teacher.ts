import Employee from "./Employee";
import Subject from "./Subject";

export default class Teacher extends Employee {
  public subject: Subject

  constructor(salary: number, subject: Subject, name: string, birthDate: Date) {
    if (salary < 0) throw new Error('Salário não pode ser negativo')
    super(name, birthDate, salary);
    this.subject = subject;
  }
}