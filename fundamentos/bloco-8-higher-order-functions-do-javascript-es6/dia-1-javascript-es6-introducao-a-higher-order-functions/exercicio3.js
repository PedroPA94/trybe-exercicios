const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const sendAnswers = (correctAnswers, studentAnswers, funcThatChecksAnswers) => funcThatChecksAnswers(correctAnswers, studentAnswers);

const checkAndSumAnswers = (correctAnswers, studentAnswers) => {
  let sum = 0;
  for (let i = 0; i < studentAnswers.length; i += 1) {
    if (studentAnswers[i] === 'N.A') { continue };
    if (studentAnswers[i] === correctAnswers[i]) {
      sum += 1;
    } else {
      sum -= 0.5;
    }
  }
  return sum;
}

console.log(sendAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAndSumAnswers));
