import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import '../TextInput/index.css'
export default class TextInput extends React.Component {

  render() {
    return (
      <div className='add-item-container'>
        <div>
        <InputGroup bsStyle="tabs" className='add-item'>
          <FormControl
            placeholder="Add item"
            aria-label="user input"
            aria-describedby="basic-addon2"
            />
          <InputGroup.Append>
            <Button variant="outline-secondary">+</Button>
          </InputGroup.Append>
        </InputGroup>
            </div>


      </div>
    )
  }
}