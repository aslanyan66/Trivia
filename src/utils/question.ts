import { IIncorrectAnswers } from 'models/questions'

export const getCurrentCases = (
  correctAnswer: string,
  incorrectAnswers: IIncorrectAnswers,
  isBooleanCases: boolean,
) => {
  const result = []
  const helper = isBooleanCases ? ['no', 'yes'] : [...incorrectAnswers, correctAnswer]

  for (let i = 0, length = helper.length; i < length; i++) {
    const currentIndex = helper.length === 1 ? 0 : Math.floor(Math.random() * helper.length)
    result.push(...helper.splice(currentIndex, 1))
  }
  return result
}
