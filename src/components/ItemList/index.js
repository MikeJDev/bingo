import React from 'react'
import { connect } from 'react-redux'
import {
  addItem
} from '../../redux/actions/index'
import '../ItemList/index.css'

function mapDispatchToProps(dispatch) {
  return {
    addItem: item => dispatch(addItem(item)),
  };
}

const mapStateToProps = state => ({
  addedItems: state.items
})

class ItemList extends React.Component {

  render() {

    const items = this.props.addedItems.map((bingoItem, y) => {
      return (
        <div className='list-item' key={y}>
          {bingoItem}
          <button className='itemXmark'></button>
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