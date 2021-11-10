import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {

  render() {
    return (

      <Router>
        <div>
          <Link to="/">User</Link>
        </div>

        <div className="App">
          <Route exact path="/" component={Users} />
        </div>
      </Router>

    )
  }
}

export default App;
