import React from 'react'
import axios from './axios' 

export default class Comment extends React.Component {
    state = {}

    requestUser = async () => {
        const user = await axios.get('/comments');
        this.setState({ comment: user.data })
        console.log(user)

    }
    componentDidMount() {
        this.requestUser();

    }

    render() {
        if (!this.state.comment) return "loading";
        return (
            <div>
                <ul>
                    {this.state.comment.map((comment) => (
                        <li key={comment.id}>
                            Id: {comment.id}
                            <div>
                            postId:{comment.postId}
                            </div>
                            <div>
                            Name:{comment.name}
                            </div>
                            <div>
                            body:{comment.body}
                            </div>
                        </li>
                        ))}
                    </ul>
                
            </div>

        );
    }
}