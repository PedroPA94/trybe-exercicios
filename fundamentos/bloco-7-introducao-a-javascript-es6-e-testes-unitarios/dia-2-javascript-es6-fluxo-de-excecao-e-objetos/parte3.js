const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


// Exercício 1

function addPropertyToObject(object, property, value) {
  object[property] = value;
}

addPropertyToObject(lesson2, 'turno', 'noite');
console.log(lesson2);


// Exercício 2

const listKeys = (object) => Object.keys(object);

console.log(listKeys(lesson1));


// Exercício 3

const objectLength = (object) => Object.keys(object).length;

console.log(objectLength(lesson3));


// Exercício 4

const listValues = (object) => Object.values(object);

console.log(listValues(lesson2));