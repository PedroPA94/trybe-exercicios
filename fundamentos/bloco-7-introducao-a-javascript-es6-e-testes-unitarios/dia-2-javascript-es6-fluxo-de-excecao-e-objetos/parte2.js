const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: 
  ${order.name}
  Telefone: ${order.phoneNumber}
  ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias
  const discount = 10;
  const modifier = {
    name: 'Luiz Silva',
    payment: {
      total: order.payment.total - discount,
    },
  };
  Object.assign(order, modifier);
  const sabores = Object.keys(order.order.pizza).join(', ');
  const drinksArray = Object.values(order.order.drinks);
  const drinks = [];
  for (let entry in drinksArray) {
    drinks.push(drinksArray[entry].type)  // Caso existam mais bebidas no pedido
  }
  return `Olá ${order.name}, o total do seu pedido de ${sabores} e ${drinks.join(', ')} é R$ ${order.payment.total}`;
}

console.log(orderModifier(order));