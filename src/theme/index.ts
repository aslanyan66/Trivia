import { createTheme } from '@mui/material'
import { typography } from './typography'
import { palette } from './palette'
import { components } from './components'

export const globalTheme = createTheme({
  typography,
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
