import { createTheme } from '@mui/material'
import { typography } from './typography'
import { palette } from './palette'
import { components } from './components'

export const globalTheme = createTheme({
  palette,
  components,
  breakpoints: {
    values: {
      xs: 576,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1900,
    },
  },
})

globalTheme.typography.h1 = {
  ...typography.h1,
  [globalTheme.breakpoints.down('lg')]: {
    fontSize: '40px',
  },
  color: palette.custom.green,
}

globalTheme.typography.h2 = {
  ...typography.h2,
  [globalTheme.breakpoints.down('lg')]: {
    fontSize: '20px',
  },
  color: palette.custom.green,
}
