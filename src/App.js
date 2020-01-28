import React from 'react';
import './App.css';
import Board from './components/Board'
import TextInput from './components/TextInput'
import Counter from './components/Counter/index'



function App() {
  return (
    <div className="App">
      <div className='textInput'>
        <TextInput></TextInput>
      </div>
      <div className='counter'>
        <Counter></Counter>
      </div>
      <div className='board'>
        <Board></Board>
      </div>
    </div>
  );
}

export default App;
