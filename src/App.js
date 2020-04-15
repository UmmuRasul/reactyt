import React from 'react';
import logo from './logo.svg';
import './App.css';
//import TodoItem from './TodoItem';
import Joke from './Joke';

function App() {
  return (
    <div className="joke">
    <Joke question="Mariam Abdallah Ali" punchline="Zainab Abdallah Ali"/>
    <Joke question="Mariam Abdallah Ali" punchline="Zainab Abdallah Ali"/>
    <Joke question="Mariam Abdallah Ali" punchline="Zainab Abdallah Ali"/>
    <Joke question="Mariam Abdallah Ali" punchline="Zainab Abdallah Ali"/>
    <Joke question="Mariam Abdallah Ali" punchline="Zainab Abdallah Ali"/>
    </div>
  )
}

export default App;
