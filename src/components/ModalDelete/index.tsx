import { Button, Modal, ModalProps } from 'react-bootstrap'

import { ItalicP } from './styles'

type ModalDeleteProps = {
  onHide: () => void
  onDelete: () => void
}

const ModalDelete: React.FC<ModalProps & ModalDeleteProps> = ({
  onHide,
  onDelete,
  ...modalProps
}) => {
  const handleDelete = () => {
    onDelete()
    onHide()
  }
  return (
    <Modal
      {...modalProps}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Deleting Contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete this contact?</p>{' '}
        <ItalicP>*This action is irreversible</ItalicP>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalDelete
