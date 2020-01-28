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

    const items = this.props.addedItems.map((bingoItem, y) => {
      return (
        <div className='list-item' key={y} id={y}>
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