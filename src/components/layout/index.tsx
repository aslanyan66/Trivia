import { Box } from '@mui/material'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from 'config/layout'
import { Navigation } from 'components'

const Layout = () => {
  const { pathname } = useLocation()

  return (
    <Box>
      <Navigation />
      <Box className="container">
        <motion.div
          key={pathname}
          initial="initial"
          animate="in"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Outlet />
        </motion.div>
      </Box>
    </Box>
  )
}

export default Layout
