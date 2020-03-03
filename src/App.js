import React from 'react';
import './App.css';
import Board from './components/Board'
import TextInput from './components/TextInput'
import { connect } from 'react-redux'
import { randomizeArray } from './redux/actions/index'
import RandomButton from './components/RandomButton/index'


const mapStateToProps = state => ({
  addedItems: state.displayArray
})

function mapDispatchToProps(dispatch) {
  return {
    randomizeArray: dispatch(randomizeArray()),
  };
}

function App() {
  const handleRandom = () => {
    randomizeArray()
  }
  return (
    <div className="App">
      <div className='textInput'>
        <TextInput></TextInput>
        <RandomButton 
          handleRandom={handleRandom}
        ></RandomButton>

      </div>
      <div className='board'>
        <Board></Board>
      </div>
    </div>
  );
}
const AppConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppConnected;
