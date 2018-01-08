import React, { Component } from 'react'
import './App.css'
import { Link, Switch, Route, Redirect } from 'react-router-dom'

import FrontPage from './views/frontpage'

class App extends Component {
  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route exact path="/" component={FrontPage}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App
