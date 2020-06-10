import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Login from './login/Login';
import Bank from './bank/Bank'

function App() { 
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/bank">
            <Bank />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
