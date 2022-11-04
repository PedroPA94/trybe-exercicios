type pizzaSlices = 4 | 6 | 8
type saboresComum = 'Calabresa' | 'Frango' | 'Pepperoni'
type saboresVegetariana = 'Marguerita' | 'Palmito' | 'Cogumelo'
type saboresDoce = 'Nutela' | 'Goiabada com queijo' | 'Marshmallow'

interface Pizza {
  flavor: string,
  slices: pizzaSlices
}

interface PizzaComum extends Pizza {
  flavor: saboresComum
}

interface PizzaVegetariana extends Pizza {
  flavor: saboresVegetariana
}

interface PizzaDoce extends Pizza {
  flavor: saboresDoce,
  slices: 4
}

const Calabresa: Pizza = {
  flavor: 'calabresa',
  slices: 8
}

const Marguerita: Pizza = {
  flavor: 'marguerita',
  slices: 6
}

const Nutela: Pizza = {
  flavor: 'nutela',
  slices: 4
}
