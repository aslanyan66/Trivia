import { styled } from '@mui/system'
import { Box } from '@mui/material'
import { palette } from '../../theme/palette'

export const backgroundColors = {
  easy: palette.custom.green400,
  medium: palette.custom.yellow,
  hard: palette.custom.orange,
}

export const StyledStatus = styled(Box)(() => {
  return {
    width: 100,
    height: 37,
    borderRadius: '12px 0px 12px 12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '170%',
    textTransform: 'capitalize',
    color: '#fff',
  }
})
