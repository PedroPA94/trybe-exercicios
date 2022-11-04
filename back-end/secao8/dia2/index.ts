import Car from './Car';

const appCar = new Car('Volkswagen', 'Silver', 4);

appCar.turnOn()
// Siga em frente;
appCar.speedUp()
// Em 600 metros vire a esquerda;
appCar.speedUp()
// Vire a esquerda;
appCar.turn('esquerda')
// Em 200 metros na rotatória pegue a segunda saída a direita;
appCar.speedUp()
appCar.turn('direita')
// Mantenha em frente pelos próximos 1,2 quilômetros;
appCar.speedUp()
// Em 300 metros vire a direita;
// Vire a direita;
appCar.turn('direita')
// Em 400 metros você chegará ao seu destino;
appCar.speedDown()
// Você chegou ao seu destino.
appCar.stop();

// Siga em frente;
appCar.speedUp()
// Em 300 metros vire a direita;
// Vire a direita;
appCar.turn('direita')
// Mantenha em frente pelos próximos 2 quilômetros;
appCar.speedUp()
// Em 200 metros vire a esquerda;
// Vire a esquerda;
appCar.turn('esquerda')
// Em 400 metros vire a direita;
// Vire a direita;
appCar.turn('direita')
// Em 100 metros você chegará ao destino.
appCar.speedDown()
// Você chegou ao destino.
appCar.stop()
appCar.turnOff()