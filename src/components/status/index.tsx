import { IQuestionDifficulty } from 'models/questions'
import { backgroundColors, StyledStatus } from './styled'

type IProps = {
  difficulty: IQuestionDifficulty
}

const Status = ({ difficulty }: IProps) => (
  <StyledStatus sx={{ backgroundColor: backgroundColors[difficulty] }}>{difficulty}</StyledStatus>
)

export default Status
