import React from 'react'
import DoneTask from './CompleteTask';
import TaskDetail from './Form'
import Todolist from './ShowTodo';


class Todo extends React.Component {
  initialTodo = {title:'',description:''}
  state = {
    todo: {
      title: '',
      description: ''
    },
    list: [],
    updatingTodoIndex:null,
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    const todo = { ...this.state.todo, [name]: value };
    this.setState({ todo });

  }
  handleSubmit = (event) => {
    event.preventDefault();
    const {todo,updatingTodoIndex,list}=this.state;
    if(!todo.title) return;
    const allInputData = { id: new Date().getTime().toString(), title:todo }
    const newTodos = [...list, allInputData];
    if(!updatingTodoIndex && updatingTodoIndex !==0){
      list.push(todo);
    }else{
      list[updatingTodoIndex]={...todo}
    }
    this.setState({
      list: newTodos,todo:this.initialTodo,
      updatingTodoIndex:null,
    })
debugger;

  }
  handleDelete = (index) => {
    const newTodos = this.state.list.filter((todo) => index !== todo.id);
    this.setState({ list: newTodos })

  }
  handleUpdate = (todoindex) => {
    const todo = {...this.state.list[todoindex]}
    this.setState({todo,updatingTodoIndex:todoindex})
     }

  handleDone = () => {
    this.setState({ completeTodo: true })
  }
  render() {
    return (
      <div>

        <TaskDetail todo={this.state.todo}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange} />
        <Todolist todolist={this.state.list}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate} />
        <DoneTask handleDone={this.handleDone} />
      </div>
    )
  }
}

export default Todo