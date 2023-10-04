import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Button, Modal, ModalProps, Form, InputGroup } from 'react-bootstrap'

import { editContact } from '../../store/reducers/contact'
import * as enums from '../../utils/enums/LabelEnum'
import ContactClass from '../../models/ContactClass'

type ModalEditProps = {
  onHide: () => void
  contactName: string
  contactNumber: number
  contactEmail: string
  label: enums.LabelEnum
  favorite: boolean
  id: number
}

const ModalEdit: React.FC<ModalProps & ModalEditProps> = ({
  onHide,
  contactName,
  contactEmail,
  contactNumber,
  label,
  favorite,
  id,
  ...modalProps
}) => {
  const [newName, setNewName] = useState(contactName)
  const [newNumber, setNewNumber] = useState(contactNumber.toString())
  const [newEmail, setNewEmail] = useState(contactEmail)
  const [newLabel, setNewLabel] = useState(label)
  const [newFavorite, setNewFavorite] = useState(favorite)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!modalProps.show) {
      setNewName(contactName)
      setNewNumber(contactNumber.toString())
      setNewEmail(contactEmail)
      setNewLabel(label)
      setNewFavorite(favorite)
    }
  }, [
    modalProps.show,
    contactName,
    contactNumber,
    contactEmail,
    label,
    favorite
  ])

  const handleSave = () => {
    const editedContact = new ContactClass(
      newName,
      parseInt(newNumber),
      newEmail,
      newLabel,
      newFavorite,
      id
    )
    dispatch(editContact(editedContact))

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
          Editing Contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="contactName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="label">
            <Form.Label>Label</Form.Label>
            <Form.Check
              type="checkbox"
              label="Family"
              checked={newLabel === enums.LabelEnum.FAMILY}
              onChange={() => setNewLabel(enums.LabelEnum.FAMILY)}
            />
            <Form.Check
              type="checkbox"
              label="Work"
              checked={newLabel === enums.LabelEnum.WORK}
              onChange={() => setNewLabel(enums.LabelEnum.WORK)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="favorite">
            <Form.Check
              type="checkbox"
              label="Favorite"
              checked={newFavorite}
              onChange={() => setNewFavorite(!newFavorite)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalEdit
