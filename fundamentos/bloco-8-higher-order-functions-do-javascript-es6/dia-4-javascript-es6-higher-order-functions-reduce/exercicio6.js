const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(studentNames, studentGrades) {
  return studentNames.map((name, index) => ({
    name,
    average: studentGrades[index].reduce((acc, current) => acc + current) / studentGrades[index].length
  }));
}

console.log(studentAverage(students, grades))
