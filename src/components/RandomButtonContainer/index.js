import React, { Component } from 'react'
import { connect } from 'react-redux'
import RandomButton from '../RandomButton/index'
import { randomizeArray } from '../../redux/actions/index'


export class RandomButtonContainer extends Component {
handleRandom = () => {
  this.props.randomizeArray()
}

  render() {
    return (
      <div>
        <RandomButton
          handleRandom={this.handleRandom}
        ></RandomButton>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  randomizeArray
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomButtonContainer)
