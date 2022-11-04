import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { clearQuestionsState, selectQuestions } from 'store/slices/questionsSlice'
import { Heading } from 'components'
import { saveUserScore } from 'utils/common'
import { selectCategories } from 'store/slices/categoriesSlice'

const QuizEnd = () => {
  const { list: questions, score } = useAppSelector(selectQuestions)
  const { selectedId: selectedCategoryId } = useAppSelector(selectCategories)
  const dispatch = useAppDispatch()

  useEffect(() => {
    return () => {
      if (selectedCategoryId !== null) {
        saveUserScore({
          categoryId: selectedCategoryId,
          score: `${score} / ${questions.length}`,
        })
      }
      dispatch(clearQuestionsState())
    }
  }, [dispatch])

  return <Heading title="Thank You" subtitle={`Your Score: ${score} / ${questions.length}`} />
}

export default QuizEnd
