import React from 'react'
import Button from 'react-bootstrap/Button';


function ClearBoardButton({
  clearBoard
}) {
  return (
    <div>
      <Button className='fill-button' variant="warning" onClick={clearBoard}>Clear All</Button>
    </div>
  )
}

export default ClearBoardButton
