import React from 'react'
import DoneTask from './CompleteTask';
import TaskDetail from './Form'
import Todolist from './ShowTodo';


class Todo extends React.Component {
<<<<<<< HEAD
  initialTodo = {title:'',description:''}
  state = {
=======
  state = {
    displayTodo: false,
    completeTodo:false,
>>>>>>> 9d30f70210b3cca13ed87d2733c50e9c220a17db
    todo: {
      title: '',
      description: ''
    },
<<<<<<< HEAD
    list: [],
    updatingTodoIndex:null,
=======
    list: []
>>>>>>> 9d30f70210b3cca13ed87d2733c50e9c220a17db
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    const todo = { ...this.state.todo, [name]: value };
    this.setState({ todo });

  }
  handleSubmit = (event) => {
    event.preventDefault();
<<<<<<< HEAD
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
=======
    this.setState({displayTodo:true})
    const newTodos =[...this.state.list,this.state.todo];
    this.setState({list:newTodos})
    this.setState({
      todo: { title: '', description: '' },
    });
  
    }
  handleDelete = (indexvalue) => {
    const newTodos=this.state.list.filter((todo,index)=>index!==indexvalue);
    this.setState({list:newTodos})
    this.setState({completeTodo:true}) 
  }
  handleUpdate = () => {
    this.setState({displayTodo:false})
    this.setState({
      todo: { title: '', description: '' },
    });
  }
  handleDone = () => {
    this.setState({completeTodo:true}) 
  }
  render() {
    return(
      <div>
    {this.state.displayTodo?( <Todolist todolist={this.state.list}
      handleDelete={this.handleDelete} 
      handleUpdate={this.handleUpdate }/>):
    (<TaskDetail todo={this.state.todo}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange} />)}
          {this.state.completeTodo &&
          <DoneTask handleDone={this.handleDone}/>}
          </div>
    )   
>>>>>>> 9d30f70210b3cca13ed87d2733c50e9c220a17db
  }
}

export default Todo