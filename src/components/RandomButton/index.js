import React from 'react'
import Button from 'react-bootstrap/Button';


function RandomButton({
  handleRandom

}) {
  return (
    <div>
      <Button className='build-button' onClick={handleRandom}>Randomize Board</Button>
    </div>
  )
}

export default RandomButton
