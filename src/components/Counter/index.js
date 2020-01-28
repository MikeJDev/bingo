import React from 'react'
import '../Counter/index.css'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  items: state.items
})

class Counter extends React.Component {
  render() {
    return (
      <div className='counter-container'>
        {this.props.items.length}
      </div>
    )
  }
}

const ConnectedCounter = connect(
  mapStateToProps,
  null
)(Counter);

export default ConnectedCounter;