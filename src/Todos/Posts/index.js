import React from 'react';
import axios from './axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Comment from '../Comment';

export default class Posts extends React.Component {
    state = {}

    requestUser = async () => {
        const user = await axios.get('/posts');
        this.setState({ post: user.data })
        console.log(user)

    }


    componentDidMount() {
        this.requestUser();

    }

    render() {
        if (!this.state.post) return "loading";
        return (
            <div>
                <ul>
                    {this.state.post.map((post) => (
                        <li key={post.id}>
                            Id: {post.id}
                            <div>
                                Title:{post.title}
                            </div>
                            <div>
                                body:{post.body}
                            </div>
                        </li>
                    ))}
                </ul>
                <Router>
                    <div>
                        <Link to="/comments">
                            <Button type="button">
                                Comments
                            </Button>
                         </Link>
                    </div>
                    <div className="App">
                        <Route exact path="/comments" component={Comment} />
                    </div>
                </Router>
            </div>

                );
    }
}