import React from 'react'
import { connect } from 'react-redux'
import '../Board/index.css'



const mapStateToProps = state => ({
  addedItems: state.items
})

class Board extends React.Component {


  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>{this.props.addedItems[0]}</td>
              <td>{this.props.addedItems[1]}</td>
              <td>{this.props.addedItems[2]}</td>
              <td>{this.props.addedItems[3]}</td>
              <td>{this.props.addedItems[4]}</td>
            </tr>
            <tr>
              <td>{this.props.addedItems[5]}</td>
              <td>{this.props.addedItems[6]}</td>
              <td>{this.props.addedItems[7]}</td>
              <td>{this.props.addedItems[8]}</td>
              <td>{this.props.addedItems[9]}</td>
            </tr>
            <tr>
              <td>{this.props.addedItems[10]}</td>
              <td>{this.props.addedItems[11]}</td>
              <td>FREE SPACE</td>
              <td>{this.props.addedItems[13]}</td>
              <td>{this.props.addedItems[14]}</td>
            </tr>
            <tr>
              <td>{this.props.addedItems[15]}</td>
              <td>{this.props.addedItems[16]}</td>
              <td>{this.props.addedItems[17]}</td>
              <td>{this.props.addedItems[18]}</td>
              <td>{this.props.addedItems[19]}</td>
            </tr>
            <tr>
              <td>{this.props.addedItems[20]}</td>
              <td>{this.props.addedItems[21]}</td>
              <td>{this.props.addedItems[22]}</td>
              <td>{this.props.addedItems[23]}</td>
              <td>{this.props.addedItems[24]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const BoardConnected = connect(
  mapStateToProps,
  null
)(Board);

export default BoardConnected;