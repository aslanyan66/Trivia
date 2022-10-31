import { Link } from 'react-router-dom'
import React from 'react'
import { HOME_ROUTE, MY_SCORES_ROUTE } from 'constants/router'
import { Navbar } from './styled'

const Navigation = () => {
  return (
    <Navbar>
      <ul>
        <li>
          <Link to={HOME_ROUTE}>Home</Link>
        </li>
        <li>
          <Link to={MY_SCORES_ROUTE}>My scores</Link>
        </li>
      </ul>
    </Navbar>
  )
}

export default Navigation
