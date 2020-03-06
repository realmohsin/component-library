import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Global } from '@emotion/core'
import globalStyles from './styles/globalStyles'
import HomePage from './pages/HomePage'
import Playground from './pages/Playground'
import NotFound from './pages/NotFound'

const App = () => (
  <>
    <Global styles={globalStyles} />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/playground' component={Playground} />
      <Route path='*' component={NotFound} />
    </Switch>
  </>
)

export default App
