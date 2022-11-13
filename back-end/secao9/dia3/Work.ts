import Evaluation from "./Evaluation";
import Teacher from "./Teacher";

export default class Work extends Evaluation {
  constructor(teacher: Teacher, score: number) {
    if (score > 50) throw new Error('Pontuação não pode ser maior que 50 pontos')
    super(score, teacher)
  }
}