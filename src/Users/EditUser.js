import React, { useEffect } from 'react';
import axios from './axios';
import { Modal,Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setUser,setShow } from '../actions';

export default function EditUser (props) {
   const dispatch = useDispatch();
   const users = useSelector((state) => state.users);
   



  useEffect(() => {
    const requestUser = async (userId) => {
      const response = await axios.get(`/users/${userId}`);
      dispatch(setUser(response.data));
    };
    if (!users.selectedUserId) return;
    requestUser(users.selectedUserId);

  }, [users.selectedUserId, dispatch]);
  
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextUser = { ...users.user, [name]: value };
    dispatch(setUser(nextUser));
  };

  const requestUpdateUser = async (user) => {
    const response = await axios.put(`/users/${user.id}`, { ...user });
    setUser(response.data);
    props.requestUser();
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    requestUpdateUser(users.user);
    onClose();
  }
  const onClose = () =>{
    dispatch(setShow(false));
  }


  if (!users.selectedUserId) return "No Data Display";
  if (users.selectedUserId && !users.user) return "Loading";

  return (
    <>
      <Modal show={users.show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit}>
        <ul>
        <li>{users.user.id}</li>
        <li><input name="name" value={users.user.name} onChange={handleChange} /></li>
        <li><input name="name" value={users.user.email} onChange={handleChange}/></li>
        <li><input name="name" value={users.user.phone} onChange={handleChange}/></li>
        </ul>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}