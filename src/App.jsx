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
          <Route exact path='/' render={() => <h2>Home Page</h2>} />
          <Route path='*' render={() => <h2>Page Not Found</h2>} />
        </Switch>
      </>
    )
  }
}

export default App
