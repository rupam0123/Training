import React from 'react';
import axios from './axios';
import User from './Users';
import { Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NewUser from '../NewUser';
import Posts from '../Todos';

export default class Users extends React.Component {
  state = { selectedUserId: null }

  requestUsers = async () => {
    const response = await axios.get('/users');
    this.setState({ users: response.data });
  }

  componentDidMount() {
    this.requestUsers();
  }

  onClickUser = (userId) => {
    this.setState({ selectedUserId: userId });
  }

  render () {
    if (!this.state.users) return "Loading";

    return (
      <div>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id} onClick={() => this.onClickUser(user.id)}>
              {user.name}
            </li>
          ))}
        </ul>
        <User requestUsers={this.requestUsers} selectedUserId={this.state.selectedUserId} />
        <Router>
          <div>
            <Link to="/newuser">
              <Button type="button">
                NewUser
              </Button>
            </Link>
          </div>
          <div>
            <Link to="/Posts">
              <Button type="button">
                Posts
              </Button>
            </Link>
          </div>
          <div className="App">
            <Route exact path="/newuser" component={NewUser} />
            <Route exact path="/Posts" component={Posts} />

          </div>
        </Router>

      </div>
    );
  }
}