import Button from '@restart/ui/esm/Button';
import React from 'react';
import { connect } from 'react-redux';
import { setUsers, setSelectedUserId,setShow,setNewShow } from '../actions';
import axios from './axios';
import EditUser from './EditUser';
import { Link } from 'react-router-dom';
import NewUser from './NewUser';

class Users extends React.Component {
  
  
  requestUsers = async () => {
    const response = await axios.get('/users');
    this.props.setUsers(response.data);
  }

  componentDidMount() {
    this.requestUsers();
  }
  
  
  onClickUser = (userId) => {
    this.props.setSelectedUserId(userId);
    this.props.setShow(true)
  }
  
  
  

  render() {
    const {newShow } = this.props.users
    if(newShow){
      return(
    <NewUser/>
      )
    }
    const { records } = this.props.users;

    return (
      <div>
        <ul>
          {records.map((user) => (
            <li key={user.id} >
              {user.name}
              <div>
                <Link to={`/${user.id}/todos`}>  <Button type="button">Todo</Button></Link>
                &nbsp;&nbsp;
                <Link to={`/${user.id}/posts`}>  <Button type="button">Post</Button></Link>&nbsp;&nbsp;
                <Button type="button" onClick={() => this.onClickUser(user.id)}>Edit</Button>
              </div>
            </li>

          ))}
        </ul>
        <Button type="button" onClick={() => this.props.setNewShow(true)} >New User</Button>
        <EditUser requestUser = {this.requestUsers}/>

      </div>
      
    );
  }
}
const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = {
  setUsers,
  setSelectedUserId,
  setShow,
  setNewShow,
};

const UsersConnectedWithRedux = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersConnectedWithRedux;