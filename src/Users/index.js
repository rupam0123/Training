import Button from '@restart/ui/esm/Button';
import React from 'react';
import axios from './axios';
import Posts from './Posts';
import User from './Todos';
import NewUser from './NewUser';
import EditUser from './EditUser'

export default class Users extends React.Component {
  state = { selectedUserId: null, 
           posts:true,
           todos:true,
           newUser:true,
           editUser:true,
           show:false
           }
   
        

  requestUsers = async () => {
    const response = await axios.get('/users');
    this.setState({ users: response.data });
  }

  componentDidMount() {
    this.requestUsers();
  }
  closeModal = () => {
    this.setState({show: false});
  }

  onClickUser = (userId) => {
    this.setState({ selectedUserId: userId,show:true});
  }

  render () {
    if (!this.state.users) return "Loading";
    if(!this.state.posts){
      return <Posts selectedUserId={this.state.selectedUserId} />
    }
    if(!this.state.todos){
      return <User selectedUserId={this.state.selectedUserId} />
    }
    if(!this.state.newUser){
      return <NewUser/>
    }
    

    return (
      <div>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id} onClick={() => this.onClickUser(user.id)} >
              {user.name}
              <div>
              <Button type ="button" onClick={() => this.setState({todos:false}) }>Todo</Button>&nbsp;&nbsp;
              <Button type ="button" onClick={() => this.setState({posts:false})}>Post</Button>&nbsp;&nbsp;
              <Button type ="button" onClick={() => this.onClickUser(user.id)}>Edit</Button>
              </div>
            </li>
            
          ))}
        </ul>
        <Button type ="button" onClick={()=>this.setState ({newUser:false})}>New User</Button>
        <EditUser requestUsers={this.requestUsers} 
          selectedUserId={this.state.selectedUserId} 
          show={this.state.show} 
          handleClose={this.closeModal} />
      </div>
    );
  }
}