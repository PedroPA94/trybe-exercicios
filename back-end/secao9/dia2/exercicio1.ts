const validateInputs = (name: string, birthDate: Date): void => {
  if (name.length < 3) throw new Error('O nome precisa ter no mínimo três caracteres')
  if (birthDate > new Date()) throw new Error('A pessoa não pode ter nascido no futuro')
  
  const age: number = (new Date().getTime() - birthDate.getTime()) / (1000 * 3600 * 24) / 365.25
  if (age > 120) throw new Error('A idade máxima é de 120 anos')
}

export default class Person {
  private _name: string
  private _birthDate: Date

  constructor(name: string, birthDate: Date) {
    validateInputs(name, birthDate);
    this._name = name;
    this._birthDate = birthDate;
  }

  get name() { return this._name }
  get birthDate() { return this._birthDate }
}