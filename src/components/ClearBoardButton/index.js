import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import '../ClearBoardButton/index.css'


function ClearBoardButton({
  clearBoard,
  items
}) {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleYesClose() {
    clearBoard()
    handleClose()
  }
  function handleOpen() {
    if (items > 0) {
      handleShow()
    }
  }
  return (
    <div>
      <Button className='clear-button' variant="danger" onClick={handleOpen}>Clear All</Button>
      <div>

        <Modal centered show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Clicking YES will remove all items from the board</Modal.Body>
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

export default ClearBoardButton
