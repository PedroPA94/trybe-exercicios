export default class OrderItem {
    private _name: string
    private _price: number

    constructor(name: string, price: number) {
        if (name.length < 3) throw new Error('Nome precisa de no mínimo três caracteres')
        if (price < 0) throw new Error('O preço não pode ser negativo')
        this._name = name
        this._price = price
    }

    get name() { return this._name }
    get price() { return this._price }

    set name(value: string) {
        if (value.length < 3) throw new Error('Nome precisa de no mínimo três caracteres')
        this._name = value
    }

    set price(value: number) {
        if (value < 0) throw new Error('O preço não pode ser negativo')
        this._price = value
    }
}