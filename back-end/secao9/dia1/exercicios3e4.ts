class ClienteLanchonete {
  constructor(private _nome: string) {}

  get nome() { return this._nome }
}

class ItemPedido {
  private _nome: string
  private _preco: number

  constructor(nome: string, preco: number) {
    this._nome = nome;
    this._preco = preco;
  }

  get nome() { return this._nome }
  get preco(): number { return this._preco }

  set preco(newValue: number) {
    if (newValue < 0) throw new Error('O preço precisa ser maior que zero');
    this._preco = newValue;
  }
}

class Pedido {
  private _cliente: ClienteLanchonete
  private _itensConsumidos: ItemPedido[]
  private _formaPagamento: string
  private _desconto = 0

  constructor(cliente: ClienteLanchonete, itensConsumidos: ItemPedido[], formaPagamento: string) {
    this._cliente = cliente;
    this._itensConsumidos = itensConsumidos;
    this._formaPagamento = formaPagamento;
  }

  get cliente() { return this._cliente }
  get itensConsumidos() { return this._itensConsumidos }
  get formaPagamento() { return this._formaPagamento }
  get desconto() { return this._desconto }

  set itensConsumidos(newValue: ItemPedido[]) {
    if (newValue.length === 0) throw new Error('O consumo precisa ser de ao menos um item')
    this._itensConsumidos = newValue
  }

  set desconto(newValue: number) { 
    if (newValue < 0 || newValue > 1) throw new Error('O desconto precisa estar entre zero e 100%')
    this._desconto = newValue
  }

  totalPedido(): number {
    return this.itensConsumidos.reduce((prev, cur) => prev + cur.preco, 0)
  }

  totalComDesconto(): number {
    return this.totalPedido() * (1 - this.desconto)
  }
}

