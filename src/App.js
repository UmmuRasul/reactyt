import React from 'react';
import logo from './logo.svg';
import './App.css';
//import TodoItem from './TodoItem';
import Joke from './Joke';

function App() {
  const nums = [1,2,3,4,5,6,7,8,9,10]
  const double = nums.map(function(num) {
    return num = 2
  })
  console.log(double)
  return (
    <div className="joke">
    <Joke punchline="It's hard to explain"/>
    <Joke question="the things to remember" punchline="It's hard to explain"/>
    <Joke question="the things to remember" punchline="It's hard to explain"/>
    <Joke question="the things to remember" punchline="It's hard to explain"/>
    <Joke question="the things to remember" punchline="It's hard to explain"/>
    </div>
  )
}

export default App;
