import React from 'react'
import axios from './axios'
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'
import Posts from '../Todos/Posts'
import Button from 'react-bootstrap/Button'

export default class User extends React.Component{
    state={selectedId : null}
    
    requestUser = async () => {
        const user = await axios.get('/users');
        this.setState({user:user.data})
        console.log(user)

    }

     
    componentDidMount(){
        this.requestUser();

    }
    onClickUser=(userId) =>{
        this.setState({selectedId:userId})
    }
    render(){
        if(!this.state.user) return "loading";
        return(
            <div>
                 <ul>
                {this.state.user.map((user)=>(
                    <li key={user.id} onClick={()=>this.onClickUser(user.id)}>
                        {user.name}
                    </li>
                    
                ))}
                </ul>
                <Router>
                <Link to="/posts">
                    <Button type="button">
                        Posts
                    </Button>
                </Link>
                <Route exact path="/posts"component={Posts}/>
                </Router>
            </div>   
        );
    }
}