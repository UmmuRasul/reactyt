import React from 'react';
import logo from './logo.svg';
import './App.css';
//import TodoItem from './TodoItem';
import ContactCard from './ContactCard';

function App() {
  return (
    <div className="contacts">
      <ContactCard
      contact={{name:"Mariam1 Abdallah",imgUrl:"http://placekitten.com/300/200",Phone:"(+254) 0707-085y5852"}}/>
      <ContactCard
      contact={{name:"Mariam2 Abdallah",imgUrl:"http://placekitten.com/300/300",Phone:"(+254) 0707fgtr-08852"}}/>
      <ContactCard
      contact={{name:"Mariam4 Abdallah",imgUrl:"http://placekitten.com/200/200",Phone:"(+254) 0707-08yu852"}}/>
      <ContactCard
      contact={{name:"Mariam1h Abdallah",imgUrl:"http://placekitten.com/400/200",Phone:"(+254) 0707-0t458852"}}/>
    </div>
  )
}

export default App;
