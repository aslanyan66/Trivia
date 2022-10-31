import { styled } from '@mui/system'
import { Box } from '@mui/material'

export const TitleBlock = styled(Box)(({ theme: { breakpoints } }) => ({
  marginBottom: '5rem',
  [breakpoints.down('lg')]: {
    marginBottom: '3rem',
  },
}))
