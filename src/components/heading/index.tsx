import { CSSProperties } from 'react'
import { Box } from '@mui/material'
import { Title, Status } from 'components'
import { IQuestionDifficulty } from 'models/questions'
import { TitleBlock } from './styled'

interface IProps {
  title: string
  statusName?: IQuestionDifficulty
  subtitle: string
  sx?: CSSProperties
}

const Heading = ({ title, statusName, subtitle, sx }: IProps) => {
  return (
    <Box sx={sx}>
      <TitleBlock>
        <Title variant="h1" component="h1" title={title} />
        {statusName && (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '22px' }}>
            <Status difficulty={statusName} />
          </Box>
        )}
      </TitleBlock>
      <Box>
        <Title variant="h2" component="h2" title={subtitle} />
      </Box>
    </Box>
  )
}

export default Heading
