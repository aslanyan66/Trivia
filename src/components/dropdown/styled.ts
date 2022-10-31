import { styled } from '@mui/system'
import { Box } from '@mui/material'
import { palette } from '../../theme/palette'

export const Container = styled(Box)(
  ({
    theme: {
      palette: { custom },
      breakpoints,
    },
  }) => ({
    position: 'relative',
    width: 320,
    [breakpoints.down('lg')]: {
      width: 250,
    },
    '& *': {
      transition: 'all 200ms ease-in-out',
    },

    '& > *': {
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.04)',
      borderRadius: 18,
      width: '100%',
      background: custom.white200,
    },

    '& .arrow.active': {
      transform: 'rotate(180deg)',
    },
  }),
)

export const Select = styled(Box)(
  ({
    theme: {
      palette: { custom },
    },
  }) => ({
    height: 56,
    border: `2px solid ${custom.white200}`,
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    justifyContent: 'space-between',
    cursor: 'pointer',
    '&:hover': {
      border: `2px solid ${custom.white300}`,
    },

    '&.active': {
      border: `2px solid ${custom.green200}`,
    },
    '&.focus': {
      border: `2px solid ${custom.green100}`,
    },
  }),
)

export const Placeholder = styled('p')(({ theme: { palette, breakpoints } }) => ({
  fontSize: '18px',
  fontWeight: '500',
  lineHeight: '170%',
  color: palette.custom.gray,
  [breakpoints.down('lg')]: {
    fontSize: '16px',
  },
}))

export const List = styled('ul')(
  ({
    theme: {
      palette: { custom },
    },
  }) => ({
    visibility: 'hidden',
    opacity: 0,
    width: '100%',
    height: 222,
    position: 'absolute',
    top: '62px',
    padding: '16px',
    background: custom.white200,
    display: 'flex',
    flexDirection: 'column',
    rowGap: '6px',
    overflowY: 'auto',
    scrollBehavior: 'smooth',

    '&.dropdown.active': {
      visibility: 'visible',
      opacity: 1,
      zIndex: 1,
    },
  }),
)

export const Item = styled('li')(
  ({
    theme: {
      palette: { custom },
      breakpoints,
    },
  }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '0 18px',
    borderRadius: 16,
    minHeight: '45px',
    cursor: 'pointer',

    '&:hover': {
      background: custom.white300,
      color: custom.green,
    },
    '& > p': {
      fontSize: '18px',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      minHeight: '100%',
      width: '100%',
      color: palette.primary.dark,
      [breakpoints.down('lg')]: {
        fontSize: '15px',
      },
      '&:hover': {
        color: palette.custom.green,
      },
    },
  }),
)
