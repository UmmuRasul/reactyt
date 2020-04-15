import React from 'react';
import logo from './logo.svg';
import './App.css';
import jokesData from './jokeData';
import Joke from './Joke';

function App() {
const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline}/>)
  return (
    <div className="joke">
      {jokeComponents}
    </div>
  )
}

export default App;
