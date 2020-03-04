import React from 'react';
import './App.css';
import Board from './components/Board'
import TextInput from './components/TextInput'
import { connect } from 'react-redux'
import RandomButtonContainer from './components/RandomButtonContainer/index'

function App() {
  return (
    <div className="App">
      <div className='board'>
        <Board></Board>
      </div>
      <div className='textInput'>
        <TextInput></TextInput>
        <RandomButtonContainer></RandomButtonContainer>
      </div>
    </div>
  );
}

export default App;
