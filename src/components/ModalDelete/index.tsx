import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { closeModal as cancel } from '../../store/reducers/modal'

export type Props = {
  closeModal: () => void
}

const ModalDelete = ({ closeModal }: Props) => {
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(cancel())
  }
  return (
    <Modal size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Deleting Contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete this contact?</p>{' '}
        <p>*This action is irreversible</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleCloseModal}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalDelete
