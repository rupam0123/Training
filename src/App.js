import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Posts from './Users/Posts';
import Todos from './Users/Todos';
import Comments from './Users/Comments';

class App extends Component {

  render() {
    return (

      <Router>
        <div>
          <Link to="/">User</Link>
  
        </div>

        <div className="App">
          <Route exact path="/" component={Users} />
          <Route path="/:userid/todos" component={Todos}/>
          <Route path="/:userid/posts" component={Posts}/>
          <Route path="/:postid/comments" component={Comments}/>
          
        </div>
      </Router>

    )
  }
}

export default App;
