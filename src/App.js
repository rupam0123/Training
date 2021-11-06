import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import User from './Users';
import Todos from './Todos';
import Comment from './Comment';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom' 

=======
import Todo from './Todo';
>>>>>>> 9d30f70210b3cca13ed87d2733c50e9c220a17db
class App extends Component{
  
  render(){
    return (
<<<<<<< HEAD
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
        <Route exact path="/"component={User}/>
        <Route path="/todos"component={Todos}/>
        <Route path="/Comments"component={Comment}/>
       </div>
        </Router>
=======
        <Todo/>
>>>>>>> 9d30f70210b3cca13ed87d2733c50e9c220a17db
    )
  }
}

export default App;
