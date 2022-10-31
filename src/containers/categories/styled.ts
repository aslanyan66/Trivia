import { styled } from '@mui/system'
import { Box } from '@mui/material'

export const Container = styled(Box)(() => ({
  alignItems: 'center',

  '& , .top': {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  '& .top': {
    rowGap: '36px',
    marginBottom: '99px',
  },
}))
