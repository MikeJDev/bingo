import React from 'react'
import Button from 'react-bootstrap/Button';
import '../FillBoardButton/index.css'


function FillBoardButton({
  fillBoard
}) {
  return (
    <div>
      <Button className='fill-button' variant="warning" onClick={fillBoard}>Fill Board</Button>
    </div>
  )
}

export default FillBoardButton
