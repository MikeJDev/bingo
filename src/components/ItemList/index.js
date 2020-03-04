import React from 'react'
import { connect } from 'react-redux'
import {
  addItem,
  removeItem
} from '../../redux/actions/index'
import '../ItemList/index.css'

function mapDispatchToProps(dispatch) {
  return {
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
  };
}

const mapStateToProps = state => ({
  addedItems: state.items
})

class ItemList extends React.Component {

  handleRemoveItem = (event) => {
    this.props.removeItem(event.target.id)
  }

  render() {
    
    let colors2 = ['rgb(255, 179, 187)', 'rgb(255, 223, 189)', 'rgb(255, 254, 191)', 'rgb(184, 255, 204)', 'rgb(184, 226, 253']
    const items = this.props.addedItems.map((bingoItem, y) => {
      let randomColor = colors2[Math.floor(Math.random() * colors2.length)]
      return (
        <div className='list-item' style={{backgroundColor: randomColor}} key={y} id={y}>
          <label>
            {bingoItem}
          </label>
          <button className='itemXmark' type='submit' id={y} onClick={this.handleRemoveItem}></button>
        </div >
      )
    })
    return (
      <div className='item-container'>
        {items}
      </div>
    )
  }
}

const ItemListConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);

export default ItemListConnected;