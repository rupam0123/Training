import Button from '@restart/ui/esm/Button';
import React from 'react';
import axios from './axios';
import Posts from './Posts';
import User from './Users';

export default class Users extends React.Component {
  state = { selectedUserId: null, 
           posts:true,
           todos:true }

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
    if(!this.state.posts){
      return <Posts selectedUserId={this.state.selectedUserId} />
    }
    if(!this.state.todos){
      return <User selectedUserId={this.state.selectedUserId} />
    }

    return (
      <div>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id} onClick={() => this.onClickUser(user.id)}>
              {user.name}
              <div>
              <Button type ="button"onClick={() => this.setState({todos:false}) }>Todo</Button>&nbsp;
              <Button type ="button"onClick={() => this.setState({posts:false})}  >Post</Button>
              </div>
            </li>
            
          ))}
        </ul>
        
      </div>
    );
  }
}