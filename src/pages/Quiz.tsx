import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Question } from 'containers'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { getQuestion, selectQuestions } from 'store/slices/questionsSlice'
import { Box } from '@mui/material'

const Quiz = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { status, list: questions, current: question } = useAppSelector(selectQuestions)
  const navigate = useNavigate()

  useEffect(() => {
    if (status === 'idle' && questions.length === 0) {
      navigate('/')
    }
    dispatch(getQuestion(+id! - 1))
  }, [dispatch, id, navigate, questions.length, status])

  return status === 'loading' || !question ? (
    <Box>Loading...</Box>
  ) : (
    <Question {...question} questionNumber={+id!} questionsLength={questions.length} />
  )
}
export default Quiz
