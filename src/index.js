import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import App from './App'
import history from './history'

const app = (
  <Router history={history}>
    <App />
  </Router>
)

render(app, document.getElementById('root'))
