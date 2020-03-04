import React, { Component } from 'react'
import { connect } from 'react-redux'
import RandomButton from '../RandomButton/index'
import { randomizeArray, fillBoard, clearBoard } from '../../redux/actions/index'
import FillBoardButton from "../FillBoardButton/index";
import ClearBoardButton from '../ClearBoardButton/index'
import ExportPDFButton from '../ExportPDFButton/index'
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
        items={this.props.items}
        ></ClearBoardButton>
        <ExportPDFButton></ExportPDFButton>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items.length
})

const mapDispatchToProps = {
  randomizeArray,
  fillBoard,
  clearBoard
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsContainer)
