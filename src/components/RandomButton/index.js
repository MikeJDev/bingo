import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import '../RandomButton/index.css'


function RandomButton({
  handleRandom,
  items
}) {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleYesClose() {
    handleRandom()
    handleClose()
  }
  function handleOpen() {
    if (items > 0) {
      handleShow()
    }
  }
  return (
    <div>
      <Button className='random-button' variant="primary" onClick={handleOpen}>Randomize</Button>

      <div>
        <Modal centered show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Clicking YES will randomize the board and could remove a winning line!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              No
          </Button>
            <Button variant="primary" onClick={handleYesClose}>
              Yes
          </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default RandomButton
