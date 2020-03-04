import React from 'react'
import Button from 'react-bootstrap/Button';
import '../FillBoardButton/index.css'


function FillBoardButton() {
  return (
    <div>
      <Button className='fill-button' variant="danger">Fill Board</Button>
    </div>
  )
}

export default FillBoardButton
