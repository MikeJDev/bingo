import React from 'react'
import Button from 'react-bootstrap/Button';
import '../RandomButton/index.css'


function RandomButton({
  handleRandom
}) {
  return (
    <div>
      <Button className='build-button' onClick={handleRandom}>Randomize</Button>
    </div>
  )
}

export default RandomButton
