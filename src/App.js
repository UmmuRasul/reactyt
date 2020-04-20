import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem';
import todosData from './todosData';


class App extends Component{
  constructor(){
    super()
    this.state = {
      firstName:"",
      lastName:""
    }
    this.handleChange = this.handleChange.bind(this)

  }
  handleChange(event){
    this.setState({
      firstName: event.target.value
    })

  }
    render(){
      return(
      <form>
        <input type="text" placeholder="First Name" onChange={this.handleChange}/>
        <br/>
        <input type="text" placeholder="last Name" onChange={this.handleChange}/>
        <h1>{this.state.firstName}{this.state.lastName}</h1>
      </form>
      )
    }
  }
export default App;
//  class App extends React.Component {
//   constructor(){
//     super()
//     this.state ={
//       todos:todosData
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }
//
//   handleChange(id){
//   this.setState(prevState => {
//     const updatedTodos = prevState.todos.map(todo =>{
//       if(todo.id === id){
//         todo.completed = !todo.completed
//       }
//       return todo
//     })
//     return{
//       todos: updatedTodos
//     }
//   })
//   }
//   render(){
//   const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
//   handleChange={this.handleChange}/>)
//
//   return (
//     <div className='todo-list'>
//       {todoItems}
//     </div>
//     )
//   }
// }
