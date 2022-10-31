import { useMemo } from 'react'
import { IQuestion } from 'models/questions'
import { Box } from '@mui/material'
import { getCurrentCases } from 'utils/question'
import { CaseButton } from 'components/customButton/styled'
import { useAppDispatch } from 'store/hooks'
import { addScore } from 'store/slices/questionsSlice'
import { useNavigate } from 'react-router-dom'
import { QUIZ_END_ROUTE } from 'constants/router'
import Heading from 'components/heading'
import { Container } from './styled'

interface IProps extends IQuestion {
  questionNumber: number
  questionsLength: number
}

const Question = ({
  difficulty,
  question,
  correct_answer: correctAnswer,
  incorrect_answers: incorrectAnswers,
  questionNumber,
  questionsLength,
  type,
}: IProps) => {
  const isBooleanCases = useMemo(() => type.toLowerCase() === 'boolean', [type])
  const NEXT_ROUTE = useMemo(
    () =>
      questionNumber < questionsLength ? `/quiz/question/${questionNumber + 1}` : QUIZ_END_ROUTE,
    [],
  )
  const cases = useMemo(
    () => getCurrentCases(correctAnswer, incorrectAnswers, isBooleanCases),
    [correctAnswer, type, incorrectAnswers],
  )

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSelectCase = (selectedCase: string) => {
    let isRightAnswer
    if (isBooleanCases) {
      isRightAnswer = selectedCase === 'yes'
    } else {
      isRightAnswer = selectedCase.toLowerCase() === correctAnswer.toLowerCase()
    }

    if (isRightAnswer) {
      dispatch(addScore())
    }
    navigate(NEXT_ROUTE)
  }

  return (
    <Box>
      <Heading
        title={`Questions ${questionNumber == 10 ? questionNumber : `0${questionNumber}`}`}
        subtitle={question}
        statusName={difficulty}
      />
      <Container>
        {cases.map((name) => (
          <CaseButton key={name} onClick={() => onSelectCase(name)}>
            {name}
          </CaseButton>
        ))}
      </Container>
    </Box>
  )
}

export default Question
