import React, { Component } from 'react'
import { connect } from 'react-redux'
import RandomButton from '../RandomButton/index'
import { randomizeArray } from '../../redux/actions/index'
import FillBoardButton from "../FillBoardButton/index";
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
        <FillBoardButton></FillBoardButton>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  randomizeArray
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsContainer)
