import Evaluation from "./Evaluation";
import Teacher from "./Teacher";

export default class Exam extends Evaluation {
  constructor(teacher: Teacher, score: number) {
    if (score > 25) throw new Error('Pontuação não pode ser maior que 25 pontos')
    super(score, teacher)
  }
}