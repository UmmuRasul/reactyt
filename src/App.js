import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
constructor(){
  super()
  this.state = {
    answer: "yes"
  }
}
render(){
  return(
    <div>
      <h1>is state important? {this.state.answer}</h1>
      <ChildComponent answer{this.state.answer}/>
    </div>
)
}
}

export default App;
