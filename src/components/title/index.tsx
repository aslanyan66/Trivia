import { Typography, TypographyProps } from '@mui/material'

interface IProps extends TypographyProps {
  title: string
  component: string
}

const Title = ({ title, ...rest }: IProps) => {
  return (
    <Typography sx={{ textAlign: 'center' }} {...rest}>
      {title}
    </Typography>
  )
}

export default Title
