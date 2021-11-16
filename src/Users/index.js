import Button from '@restart/ui/esm/Button';
import React from 'react';
import { connect } from 'react-redux';
import { setUsers, setSelectedUserId } from '../actions';
import axios from './axios';
import EditUser from './EditUser';
import { Link } from 'react-router-dom';

class Users extends React.Component {
  requestUsers = async () => {
    const response = await axios.get('/users');
    this.props.setUsers(response.data);
  }

  componentDidMount() {
    this.requestUsers();
  }
  closeModal = () => {
    this.setState({ show: false });
  }

  onClickUser = (userId) => {
    this.setState({ selectedUserId: userId, show: true });
  }
  

  render() {
    const { records } = this.props.users;

    return (
      <div>
        <ul>
          {records.map((user) => (
            <li key={user.id} onClick={() => this.onClickUser(user.id)} >
              {user.name}
              <div>
                <Link to={`/${user.id}/todos`}>   <Button type="button">Todo</Button></Link>
                &nbsp;&nbsp;
                <Link to={`/${user.id}/posts`}>   <Button type="button">Post</Button></Link>&nbsp;&nbsp;
                <Button type="button" onClick={() => this.onClickUser(user.id)}>Edit</Button>
              </div>
            </li>

          ))}
        </ul>
        <Button type="button" onClick={(EditUser)}>New User</Button>
       
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
};

const UsersConnectedWithRedux = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersConnectedWithRedux;