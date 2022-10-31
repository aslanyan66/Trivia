import { styled } from '@mui/system'
import { Box } from '@mui/material'

export const StyledApp = styled(Box)(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    background: primary.background,
    width: '100%',
    height: '100%',
  }),
)
