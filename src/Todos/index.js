import React from 'react'
import axios from './axios' 

export default class User extends React.Component {
    state = {}

    requestUser = async () => {
        const user = await axios.get('/todos');
        this.setState({ todo: user.data })
        console.log(user)

    }


    componentDidMount() {
        this.requestUser();

    }


    render() {
        if (!this.state.todo) return "loading";
        return (
            <div>
                <ul>
                    {this.state.todo.map((todo) => (
                        <li key={todo.id}>
                            Id: {todo.id}
                            <div>
                                Title:{todo.title}
                            </div>
                            <div>
                                Completed:{todo.completed}
                            </div>
                        </li>

                    ))}

                </ul>
            </div>

        );
    }
}