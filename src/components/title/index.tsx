import { Typography, TypographyProps } from '@mui/material'
import { decodeEntities } from 'utils/common'

interface IProps extends TypographyProps {
  title: string
  component: string
}

const Title = ({ title, ...rest }: IProps) => {
  return (
    <Typography sx={{ textAlign: 'center' }} {...rest}>
      {decodeEntities(title)}
    </Typography>
  )
}

export default Title
