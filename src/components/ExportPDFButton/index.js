import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import '../ExportPDFButton/index.css'

function ExportPDFButton() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button className='export-button' variant="success" onClick={handleShow}>Export PDF</Button>
      <div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>Exporting as PDF is currently under development</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Ok
          </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default ExportPDFButton
