import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem';
import todosData from './todosData';


class App extends Component{
  constructor(){
    super()
    this.state = {
      loading: false,
      character:{}
    }
  }
    componentDidMount(){
      this.setState({loading: true})
      fetch('https://swapo.co/api/people/1')
        .then(responce => responce.json())
        .then(data => {
          this.setState({
            loading: false,
            character:data
        })
      });
    }
    render(){
      const text = this.state.loading ? "loading...": this.state.character.name
      return(
        <div>
        {text}
        </div>
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
