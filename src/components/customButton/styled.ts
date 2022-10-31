import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'
import { palette } from 'theme/palette'

const styles = {
  fontWeight: 700,
  fontSize: 18,
  lineHeight: '22px',
  height: '56px',
  transition: 'all 300ms ease',
  borderRadius: 18,
}

export const DefaultButton = styled(Button)(({ disabled }) => ({
  ...styles,
  background: disabled ? palette.custom.white200 : palette.primary.main,
  color: palette.custom.white,
  textTransform: 'capitalize',
  width: '150px',
  '&:hover': {
    background: palette.custom.green600,
  },
}))

export const CaseButton = styled(Button)(() => ({
  ...styles,
  maxWidth: '290px',
  minWidth: '200px',
  color: palette.primary.dark,
  textTransform: 'capitalize',
  border: `2px solid ${palette.custom.green100}`,
  '&:hover': {
    background: palette.custom.green100,
    color: palette.custom.green600,
  },
}))
