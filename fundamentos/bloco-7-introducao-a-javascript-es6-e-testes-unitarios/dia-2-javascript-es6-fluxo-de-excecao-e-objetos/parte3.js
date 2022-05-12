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


// Exercício 5

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})

console.log(allLessons);


// Exercício 6

function getNumberOfStudents(object) {
  let numeroEstudantesTotal = 0;
  for (let i = 1; i <= objectLength(object); i += 1) {
    numeroEstudantesTotal += object[`lesson${i}`].numeroEstudantes;
  }
  return numeroEstudantesTotal;
}

console.log(getNumberOfStudents(allLessons))


// Exercício 7

const getValueByNumber = (object, number) => Object.values(object)[number];

console.log(getValueByNumber(lesson1, 0))


// Exercício 8

const verifyPair = (object, property, value) => object[property] === value;

console.log(verifyPair(lesson1, 'professor', 'Maria Clara'))


/*
***********
** Bônus **
***********
*/

// Exercício 1

const studentsOfSubject = (object, subject) => {
  let numberOfStudents = 0;
  const lessons = Object.values(object);
  for (let lesson of lessons) {
    if (lesson.materia === subject) {
      numberOfStudents += lesson.numeroEstudantes;
    }
  }
  return numberOfStudents;
}

console.log(studentsOfSubject(allLessons, 'Matemática'));


// Exercício 2

const createReport = (object, professor) => {
  const report = {
    'professor': professor,
  };
  const aulas = [];
  let totalStudents = 0;
  for (let entry of Object.values(object)) {
    if (entry['professor'] === professor) {
      aulas.push(entry.materia)
      totalStudents += entry.numeroEstudantes;
    }
  }
  report['aulas'] = aulas;
  report['estudantes'] = totalStudents;
  return report;
}

console.log(createReport(allLessons, 'Maria Clara'));
