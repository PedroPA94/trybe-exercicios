class Car {
  brand: string
  color: string
  doors: number

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('Honk, honk!')
  }

  turnOn(): void {
    console.log('O carro está ligado')
  }

  turnOff(): void {
    console.log('O carro está desligado')
  }

  speedUp(): void {
    console.log('Acelerando!')
  }

  speedDown(): void {
    console.log('Freando!')
  }

  stop(): void {
    console.log('Parando o carro... Parou!')
  }

  turn(direction: string): void {
    console.log(`Virando à ${direction}`)
  }
}

export default Car;