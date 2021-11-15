import React, { useState, useEffect } from 'react';
import axios from './axios';
import { Modal,Button } from 'react-bootstrap';


export default function EditUser (props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const requestUser = async (userId) => {
      const response = await axios.get(`/users/${userId}`);
      setUser(response.data);
    };
    if (!props.selectedUserId) return;
    requestUser(props.selectedUserId);

  }, [props.selectedUserId]);
  
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextUser = { ...user, [name]: value };
    setUser(nextUser);
  };

  const requestUpdateUser = async (user) => {
    const response = await axios.put(`/users/${user.id}`, { ...user });
    setUser(response.data);
    props.requestUsers();
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    requestUpdateUser(user);
    props.handleClose();
  }

  if (!props.selectedUserId) return "No Data Display";
  if (props.selectedUserId && !user) return "Loading";

  return (
    <>
      
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit}>
        <ul>
        <li>{user.id}</li>
        <li><input name="name" value={user.name} onChange={handleChange} /></li>
        <li><input name="name" value={user.email} onChange={handleChange}/></li>
        <li><input name="name" value={user.phone} onChange={handleChange}/></li>
        </ul>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
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