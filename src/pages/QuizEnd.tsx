import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { clearQuestionsState, selectQuestions } from 'store/slices/questionsSlice'
import { Box } from '@mui/material'
import { Title } from 'components'

const QuizEnd = () => {
  const { list: questions, score } = useAppSelector(selectQuestions)
  const dispatch = useAppDispatch()

  useEffect(() => {
    return () => {
      dispatch(clearQuestionsState())
    }
  }, [dispatch])

  return (
    <Box>
      <Box>
        <Title title="Thank You" component="h1" variant="h1" />
      </Box>
      <Box sx={{ marginTop: '146px' }}>
        <Title title={`Your Score: ${score} / ${questions.length}`} component="h2" variant="h2" />
      </Box>
    </Box>
  )
}

export default QuizEnd
