
import React, { Component } from 'react';
import _ from 'lodash';
import { BrowserRouter as Router, Switch,Route, withRouter } from 'react-router-dom';
import Login from './login';
import Dashboard from "./Dashboard"
import Liked from './Liked'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path='/liked' component={Liked} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/' component={Login} />
          </Switch>

        </Router>
      </div>
    );
  }
}
export default App
