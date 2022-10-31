import { useAppDispatch, useAppSelector } from 'store/hooks'
import { selectCategories } from 'store/slices/categoriesSlice'
import { Dropdown, Heading, Title } from 'components'
import { Container } from './styled'
import { Box } from '@mui/material'
import { DefaultButton } from 'components/customButton/styled'
import { useNavigate } from 'react-router-dom'
import { getQuestionsAsync } from 'store/slices/questionsSlice'

const Categories = () => {
  const { list: categories, selected: selectedCategory } = useAppSelector(selectCategories)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleStart = () => {
    if (selectedCategory?.id) {
      navigate('/quiz/question/1')
      dispatch(getQuestionsAsync(selectedCategory.id))
    }
  }
  return (
    <Container>
      <Box className="top">
        <Heading title="Trivia App" subtitle="Pick a Category" />
        <Dropdown list={categories} placeholder="Category" />
      </Box>
      <DefaultButton disabled={!selectedCategory} onClick={handleStart}>
        Start
      </DefaultButton>
    </Container>
  )
}

export default Categories
