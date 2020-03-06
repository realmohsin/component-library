import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Global } from '@emotion/core'
import globalStyles from './styles/globalStyles'

class App extends React.Component {
  render () {
    return (
      <>
        <Global styles={globalStyles} />
        <Switch>
          <Route exact path='/' render={() => <h1>Component Library</h1>} />
          <Route path='*' render={() => <h1>Page Not Found</h1>} />
        </Switch>
      </>
    )
  }
}

export default App
