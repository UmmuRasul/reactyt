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
      lastName:"",
      isFriendly: true,
      gender:""
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    const {name, value, type, checked} = event.target
    type === "checked" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }
    render(){
      return(
        <form>
          <input
            type="text"
            value={this.state.firstName}
            name="firstNmae"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br/>
          <input
            type="text"
            value={this.state.lastName}
            name="lastNmae"
            placeholder="last Name"
            onChange={this.handleChange}
          />
        {

        }
        <br />
          <textarea
            value={"some default values"}
            onChange={this.handleChange}
            />
          <br />
          <label>
          <input type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />Is Friendly
          </label>

          <br />
          <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />Male
          </label>

          <label>
          <br />
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />Female
          </label>


          <h1>{this.state.firstName}{this.state.lastName}</h1>
          <h2>You are a {this.state.gender}</h2>
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
