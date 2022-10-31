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

export const DefaultButton = styled(Button)(({ disabled, theme: { breakpoints } }) => ({
  ...styles,
  background: disabled ? palette.custom.white200 : palette.primary.main,
  color: palette.custom.white,
  textTransform: 'capitalize',
  width: '150px',
  '&:hover': {
    background: palette.custom.green600,
  },
  [breakpoints.down('lg')]: {
    width: 180,
    height: 45,
    fontSize: 16,
  },
}))

export const CaseButton = styled(Button)(({ theme: { breakpoints } }) => ({
  ...styles,
  width: 290,
  color: palette.primary.dark,
  textTransform: 'capitalize',
  minHeight: 56,
  border: `2px solid ${palette.custom.green100}`,
  '&:hover': {
    background: palette.custom.green100,
    color: palette.custom.green600,
  },
  [breakpoints.down('lg')]: {
    width: 230,
    fontSize: 15,
    height: 'auto',
    minHeight: 60,
  },
}))
