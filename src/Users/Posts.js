import React from 'react'
import axios from './axios' 

export default class User extends React.Component {
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
                
            </div>

        );
    }
}