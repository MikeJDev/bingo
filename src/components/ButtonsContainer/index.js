import React, { Component } from 'react'
import { connect } from 'react-redux'
import RandomButton from '../RandomButton/index'
import { randomizeArray, fillBoard, clearBoard } from '../../redux/actions/index'
import FillBoardButton from "../FillBoardButton/index";
import ClearBoardButton from '../ClearBoardButton/index'
import '../ButtonsContainer/index.css'


export class ButtonsContainer extends Component {
handleRandom = () => {
  this.props.randomizeArray()
}

  render() {
    return (
      <div className='buttonsContainer'>
        <RandomButton
          handleRandom={this.handleRandom}
        ></RandomButton>
        <FillBoardButton
          fillBoard={this.props.fillBoard}
        ></FillBoardButton>
        <ClearBoardButton
        clearBoard={this.props.clearBoard}
        ></ClearBoardButton>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  randomizeArray,
  fillBoard,
  clearBoard
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsContainer)
