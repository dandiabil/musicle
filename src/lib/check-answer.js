export const checkAnswer = (guessAnswer = [], answer) => {
  let isExist = [];
  guessAnswer.map((item) => (answer.find((letter) => letter === item) ? isExist.push(item) : isExist.push('')));
  return isExist;
};
