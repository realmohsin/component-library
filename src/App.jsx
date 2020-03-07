import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Playground from './pages/Playground'
import NotFound from './pages/NotFound'

const App = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/playground' component={Playground} />
    <Route path='*' component={NotFound} />
  </Switch>
)

export default App
