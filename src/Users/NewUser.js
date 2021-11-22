import { Button} from 'react-bootstrap'
import { Modal } from 'react-bootstrap';
import { setAdd, setNewShow } from '../actions';
import {requestNewUsers} from '../thunks/newUser'
import { useHistory } from 'react-router';
import { useSelector,useDispatch } from 'react-redux';

 export default function NewUser (props){
   const dispatch =useDispatch()
  const addUser = useSelector((state)=> state.newUserReducer.data)
  const {name,phone,email,userName} = addUser

  const handleChange = (event) =>{
    dispatch(setAdd({...addUser,[event.target.name] : event.target.value}))
     }
       
  const handleSubmit = (event) =>{
    event.preventDefault();
    dispatch(requestNewUsers(addUser));
    
    closeModal();
     }
     const closeModal = () => {
      dispatch(setNewShow(false));
    }
    const newUser = ()=>{
      dispatch(setNewShow(true))
    }
    
    return (
            <div>
                 <>
      <Modal show={newUser} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>ADD User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit}>
        <ul>
        <li>Name:<br/>
          <input name="name" value={name} onChange={handleChange} /></li>
        <li>email:<br/>
          <input name="email" value={email} onChange={handleChange}/></li>
        <li>phone:<br/>
          <input name="phone" value={phone} onChange={handleChange}/></li>
        <li>userName:<br/>
          <input name="userName" value={userName} onChange={handleChange}/></li>
        </ul>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
            </div>
        )
    }
  
  
  
  