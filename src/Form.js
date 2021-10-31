import React from 'react'
import { Button, FormControl } from 'react-bootstrap';
import Form from 'react-bootstrap/Button';
import InputLabel from 'react-bootstrap/Button';



class UserDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            city: '',
            mobile: '',
            showDetail: false

        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleMobileChange = this.handleMobileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    handleCityChange(event) {
        this.setState({ city: event.target.value });
    }
    handleMobileChange(event) {
        this.setState({ mobile: event.target.value });
    }

    handleSubmit(event) {
        this.setState({ showDetail: true })
        event.preventDefault();
    }

    render() {
        return (
            <div>
            <Form onSubmit={this.handleSubmit}>
                <InputLabel>Name:</InputLabel>
                <FormControl 
                placeholder="Enter Name"
                value={this.state.name} 
                onChange={this.handleNameChange} />
                <InputLabel >Email:</InputLabel>
                <FormControl 
                placeholder="Enter Email"
                type="email" 
                value={this.state.email} 
                onChange={this.handleEmailChange} />
                <InputLabel >city</InputLabel>
                <FormControl 
                placeholder="Enter City"
                value={this.state.city} 
                onChange={this.handleCityChange} />
                <InputLabel >mobile</InputLabel>
                <FormControl
                type="Number"
                placeholder="Enter Mobile number" 
                value={this.state.mobile}
                onChange={this.handleMobileChange} />
                <Button onClick={this.handleSubmit}>Submit</Button>
             </Form>
             {this.state.showDetail && <p>Name:{this.state.name} Email:{this.state.email} City:{this.state.city} Mobile:{this.state.mobile} </p>}
            </div>
            
        );
    }
}

export default UserDetail