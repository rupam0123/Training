import React from 'react'
import axios from './axios'

export default class Todos extends React.Component{
    state={}
    
    requestUser = async (userId) => {
        const user = await axios.get(`/users/${userId}`);
        this.setState({user:user.data})
        console.log(user)

    }

     
    componentDidUpdate(prevprops){
        if(prevprops.selectedId!==this.props.selectedId){
            this.requestUser(this.props.selectedId);
        }
        

    }
    render(){
        const { user } = this.state
        if(!user) return "loading";
        return(
            <div>
                 <ul>
                    <li>{user.id}</li>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                <li>{user.phone}</li>
                </ul>

            </div>   
        );
    }
}