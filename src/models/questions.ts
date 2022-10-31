export type IQuestionType = 'boolean' | 'multiple'
export type IQuestionDifficulty = 'medium' | 'easy' | 'hard'
export type IIncorrectAnswers = string[]

export interface IQuestion {
  category: string
  type: IQuestionType
  difficulty: IQuestionDifficulty
  question: string
  correct_answer: string
  incorrect_answers: IIncorrectAnswers
}
export interface IServerQuestionsResponse {
  results: IQuestion[]
}
