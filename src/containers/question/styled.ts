import { styled } from '@mui/system'
import { Box } from '@mui/material'

export const Container = styled(Box)(({ theme: { breakpoints } }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: '15px',
  marginTop: 72,
  [breakpoints.down('lg')]: {
    paddingBottom: '20px',
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: '10px',
    marginTop: 36,
  },
}))
