import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { clearQuestionsState, selectQuestions } from 'store/slices/questionsSlice'
import { Heading } from 'components'

const QuizEnd = () => {
  const { list: questions, score } = useAppSelector(selectQuestions)
  const dispatch = useAppDispatch()

  useEffect(() => {
    return () => {
      dispatch(clearQuestionsState())
    }
  }, [dispatch])

  return <Heading title="Thank You" subtitle={`Your Score: ${score} / ${questions.length}`} />
}

export default QuizEnd
