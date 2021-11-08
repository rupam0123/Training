import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Users from './Users';
import Todos from './Todos';
import Comment from './Comment';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom' 

class App extends Component{
  
  render(){
    return (

      <Router>
        <div>
        <Link to="/">User</Link>
        </div>
        <div>
        <Link to="/todos">Todo</Link>
        </div>
        <div>
        <Link to="/comments">Comment</Link>
        </div>
      <div className="App">
        <Route exact path="/"component={Users}/>
        <Route path="/todos"component={Todos}/>
        <Route path="/Comments"component={Comment}/>  
       </div>
        </Router>
      
    )
  }
}

export default App;
