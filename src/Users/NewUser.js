import React, { Component } from 'react'
import axios from 'axios'
import { Button, FormControl } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputLabel from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import { setAdd, setNewShow } from '../actions';
import { connect } from 'react-redux'

class NewUser extends Component {

    
     handleChange = (event) =>{
         this.setState({[event.target.name] : event.target.value})
     }
       
     handleSubmit = (event) =>{
         event.preventDefault()
         axios.post("http://localhost:3008/users",this.state)
         .then(response =>{
             console.log(response)
         })
        this.closeModal();
     }
     closeModal = () => {
      this.props.setNewShow(false);
    }
    newUser = ()=>{
      this.props.setNewShow(true)
    }


    render() {
        const {name, phone, email, userName} =this.props.users;
        return (
            <div>
                 <>
      <Modal show={this.newUser} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={this.handleSubmit}>
        <ul>
        <li>Name:<input name="name" value={name} onChange={this.handleChange} /></li>
        <li>phone:<input name="name" value={phone} onChange={this.handleChange}/></li>
        <li>email:<input name="name" value={email} onChange={this.handleChange}/></li>
        <li>userName:<input name="name" value={userName} onChange={this.handleChange}/></li>
        </ul>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.closeModal}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={this.handleSubmit }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.newUserReducer,
    newshow:state.users,
  });
  
  const mapDispatchToProps = {
      setAdd,
      setNewShow
    };
  
  const UsersConnectedWithRedux = connect(mapStateToProps, mapDispatchToProps)(NewUser);
  
  export default UsersConnectedWithRedux;