enum Meses {
  janeiro = 1,
  fevereiro,
  março,
  abril,
  maio,
  junho,
  julho,
  agosto,
  setembro,
  outubro,
  novembro,
  dezembro
}

class Data {
  private _dia: number
  private _mes: number
  public ano: number

  constructor(dia: number, mes: number, ano: number) {
    if (dia < 1 || mes < 1 || dia > 31 || mes > 12) {
      dia = 1
      mes = 1
      ano = 1900
    }

    this.ano = ano;
    this._dia = dia;
    this._mes = mes;
  }

  get dia() { return this._dia }
  get mes() { return this._mes }

  set dia(value: number) {
    if (value < 1 || value > 31) throw new Error('Dia precisa ser um número entre 1 e 31');
    this._dia = value;
  }

  set mes(value: number) {
    if (value < 1 || value > 12) throw new Error('Mês precisa ser um número entre 1 e 12');
    this._mes = value;
  }

  getMonthName() {
    return Meses[this._mes]
  }

  isLeapYear() {
    return this.ano % 4 === 0
  }

  dateToString() {
    return `${this._dia}/${this._mes}/${this.ano}`
  }

  compare(dateToCompare: Data) {
    if (this.dateToString() === dateToCompare.dateToString()) return 0
    if (new Date(this.dateToString()) > new Date(dateToCompare.dateToString())) return 1
    return -1
  }

  format(dateFormat: string) {
    const dia = this._dia < 10 ? `0${this._dia}` : this._dia.toString();
    const mes =  dateFormat.includes('M') ? Meses[this._mes] : this._mes.toString();
    const ano = dateFormat.includes('aaaa')? this.ano.toString() : this.ano.toString().slice(2)
    
    let formatedDate = dateFormat.replace('dd', dia)

    if (dateFormat.includes('M')) {
      formatedDate = formatedDate.replace('M', mes)
    } else {
      formatedDate = formatedDate.replace('mm', mes)
    }

    if (dateFormat.includes('aaaa')) {
      formatedDate = formatedDate.replace('aaaa', ano)
    } else {
      formatedDate = formatedDate.replace('aa', ano)
    }

    return formatedDate
  }
}