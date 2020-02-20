import React from 'react';
import './App.css';
import Board from './components/Board'
import TextInput from './components/TextInput'
// import Counter from './components/Counter/index'
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import {
  randomizeArray
} from './redux/actions/index'


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
    console.log('hello')
    randomizeArray()
  }
  return (
    <div className="App">
      <div className='textInput'>
        <TextInput></TextInput>
        <Button className='build-button' onClick={handleRandom}>Randomize Board</Button>
      </div>
      {/* <div className='counter'>
        <Counter></Counter>
      </div> */}
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
