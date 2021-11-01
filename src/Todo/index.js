import React from 'react'
import DoneTask from './CompleteTask';
import TaskDetail from './Form'
import Todolist from './ShowTodo';


class Todo extends React.Component {
  state = {
    displayTodo: false,
    completeTodo:false,
    todo: {
      title: '',
      description: ''
    },
    list: []
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    const todo = { ...this.state.todo, [name]: value };
    this.setState({ todo });

  }
  handleSubmit = (event) => {
    event.preventDefault();
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
  }
}

export default Todo