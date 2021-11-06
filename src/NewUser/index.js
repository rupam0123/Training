import React, { Component } from 'react'
import axios from 'axios'
import { Button, FormControl } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputLabel from 'react-bootstrap/Button';

class NewUser extends Component {

    state = {
        name :'',
        phone:'',
        email:'',
        UserName:'',
     }
     changeHandler = (event) =>{
         this.setState({[event.target.name] : event.target.value})
     }
       
     submitHandler = (event) =>{
         event.preventDefault()
         axios.post("http://localhost:3008/posts",this.state)
         .then(response =>{
             console.log(response)
         })
     }

    render() {
        const {name, phone, email, userName} =this.state;
        return (
            <div>
                <Form onSubmit={this.submitHandler}>
                    <div>
                        <InputLabel>Name</InputLabel>
                        <FormControl 
                        type="text" 
                        name="name"
                        value={name} 
                        onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <InputLabel>Phone</InputLabel>
                        <FormControl 
                        type="text" 
                        name="phone" 
                        value={phone}
                         onChange={this.changeHandler}/>
                    </div>
                    <div>
                    <InputLabel>Email</InputLabel>
                        <FormControl 
                        type="text" 
                        name="email"
                        value={email}
                         onChange={this.changeHandler}/>
                    </div>
                    <div>
                    <InputLabel>UserName</InputLabel>
                        <FormControl 
                        type="text"
                         name="username" 
                         value={userName} onChange={this.changeHandler}/>
                    </div>
                    <div>
                    <Button type="submit" >submit</Button>
                    </div>
                    </Form>
            </div>
        )
    }
}

export default NewUser
