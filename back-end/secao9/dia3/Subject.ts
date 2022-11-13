export default class Subject {
  private _name: string

  constructor (name: string) {
    Subject.validateName(name)
    this._name = name
  }

  private static validateName(name: string) {
    if (name.length < 3) {
      throw new Error('O nome precisa ter no mínimo três caracteres')
    }
  }  

  get name() { return this._name }

  set name(name: string) {
    Subject.validateName(name)
    this._name = name
  }
}