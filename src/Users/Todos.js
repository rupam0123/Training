
import React from 'react';
import axios from './axios';
import { setTodo} from '../actions';
import { connect } from 'react-redux';

class Todos extends React.Component {
  requestUser = async () => {
    const { userid } = this.props.match.params
    const response = await axios.get(`/users/${userid}/todos`);
    console.log(response.data)
    this.props.setTodo(response.data);


  }

  componentDidMount() {

    this.requestUser();

  }


  render() {
    const { todos } = this.props
    if (!todos) return "Loading";


    return (

      <div>
        <h1>Todos</h1>
        <ul>
          {todos.map((user) => (
            <li key={user.userId}>
              <div>
                userId:{user.userId}
              </div>
              <div>
                id:{user.id}
              </div>
              <div>
                title:{user.title}
              </div>
              <div>
                Complete{user.completed}
              </div>
            </li>
          ))}

        </ul>

      </div>
    );
  }
}
const mapStateToProps = state => ({
  todos: state.todoReducer.todos,
});

const mapDispatchToProps = {
  setTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);


