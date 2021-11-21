
import React from 'react';
import { connect } from 'react-redux';
import {requestTodo} from '../thunks/todo'


class Todos extends React.Component {
  

  componentDidMount() {
    this.props.requestTodo();

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
  requestTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);


