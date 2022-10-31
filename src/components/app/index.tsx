import { Routes, Route, Navigate } from 'react-router-dom'
import { StyledApp } from './styled'
import { HomePage, QuizPage, QuizEnd, MyScores } from 'pages'
import { AnimationLayout } from 'components'
import { HOME_ROUTE, MY_SCORES_ROUTE, QUIZ_END_ROUTE, QUIZ_ROUTE } from 'constants/router'

const App = () => {
  return (
    <StyledApp>
      <Routes>
        <Route element={<AnimationLayout />}>
          <Route path={HOME_ROUTE} element={<HomePage />} />
          <Route path={QUIZ_ROUTE} element={<QuizPage />} />
          <Route path={MY_SCORES_ROUTE} element={<MyScores />} />
          <Route path={QUIZ_END_ROUTE} element={<QuizEnd />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </StyledApp>
  )
}

export default App
