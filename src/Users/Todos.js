
import React from 'react';
import { connect } from 'react-redux';
import {requestTodo} from '../thunks/todo'
import {setTodo} from '../actions'


class Todos extends React.Component {
  

  componentDidMount() {
    const { userid } = this.props.match.params
    this.props.requestTodo(userid);

  }


  render() {
    const { todos } = this.props
    if (!todos) return "Loading";
    console.log('testing',todos)


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
  requestTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);


