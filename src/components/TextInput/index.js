import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import '../TextInput/index.css'
import ItemList from '../ItemList/index'
import { connect } from 'react-redux'
import {
  addItem
} from '../../redux/actions/index'

function mapDispatchToProps(dispatch) {
  return {
    addItem: item => dispatch(addItem(item)),
  };
}

class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itemToBeAdded: null
    }
  }

  handleAddItem = (e) => {
    if (this.state.itemToBeAdded !== null) {
      this.props.addItem(this.state.itemToBeAdded)
    }
    this.setState({ itemToBeAdded: null })
  }

  handleChange = (e) => {
    this.setState({ itemToBeAdded: e.target.value })
  }

  render() {
    return (
      <div className='add-item-container'>
        <div>
          <InputGroup className='add-item'>
            <FormControl
              placeholder="Add item"
              aria-label="user input"
              aria-describedby="basic-addon2"
              onChange={this.handleChange}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" type='submit' onClick={this.handleAddItem}>+</Button>
            </InputGroup.Append>
          </InputGroup>
          <ItemList></ItemList>
        </div>


      </div>
    )
  }
}

const textInputContainer = connect(
  null,
  mapDispatchToProps
)(TextInput);

export default textInputContainer;