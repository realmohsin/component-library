import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import App from './App'
import history from './history'
import theme from './styles/theme'
import globalStyles from './styles/globalStyles'

const app = (
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <App />
    </ThemeProvider>
  </Router>
)

render(app, document.getElementById('root'))
