import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'components'
import { store } from 'store/store'
import './api/axios'
import './assets/styles/index.css'
import { globalTheme } from './theme'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={globalTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>,
)
