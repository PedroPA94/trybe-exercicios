class PessoaEstudante {
  private _matricula: string
  private _nome: string
  private _notasProvas: number[]
  private _notasTrabalhos: number[]

  constructor(matricula: string, nome: string, notasProvas: number[], notasTrabalhos: number[]) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProvas = notasProvas;
    this._notasTrabalhos = notasTrabalhos;
  }

  get matricula(): string { return this._matricula }
  get nome(): string { return this._nome }
  get notasProvas(): number[] { return this._notasProvas }
  get notasTrabalhos(): number[] { return this._notasTrabalhos }

  set notasProvas(newValue: number[]) {
    if (newValue.length <= 4) this._notasProvas = (newValue)
    else throw new Error('É possível atribuir apenas quatro notas de provas');
  }

  set notasTrabalhos(newValue: number[]) {
    if (newValue.length <= 2) this._notasTrabalhos = (newValue)
    else throw new Error('É possível atribuir apenas duas notas de trabalhos');
  }

  somaNotas() {
    return this._notasProvas.reduce((a, b) => a + b) + this._notasTrabalhos.reduce((a, b) => a + b)
  }

  mediaNotas() {
    return Math.round(this.somaNotas() / (this._notasProvas.length + this._notasTrabalhos.length))
  }
}


