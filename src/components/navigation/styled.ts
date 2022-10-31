import { styled } from '@mui/system'

export const Navbar = styled('nav')(({ theme: { palette } }) => ({
  padding: 10,
  '& > ul': {
    display: 'flex',
    columnGap: 10,

    '& > li::after': {
      content: '""',
      width: 0,
      height: 1.5,
      display: 'block',
      background: palette.primary.dark,
      transition: '300ms',
      marginTop: 1,
    },
    '& > li:hover::after': {
      width: '100%',
    },
  },
}))
