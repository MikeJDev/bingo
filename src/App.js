import React from 'react';
import './App.css';
import Board from './components/Board'
import TextInput from './components/TextInput'
import ButtonsContainer from './components/ButtonsContainer/index'

function App() {
  return (
    <div className="App">
      <div className='board'>
        <Board></Board>
        <ButtonsContainer></ButtonsContainer>
      </div>
      <div className='textInput'>
        <TextInput></TextInput>
      </div>
    </div>
  );
}

export default App;
