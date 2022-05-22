import React from 'react'
import {Modal,Button} from 'react-bootstrap'

interface Props{
    show:boolean;
    val:string;
    handleClose:(e:React.FormEvent)=>void;
}

const Modals = ({show,val,handleClose}:Props) => {
    return (
        <>
        <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>{val}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
}

export default Modals
