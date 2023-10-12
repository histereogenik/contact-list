import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { editContact } from '../../store/reducers/contact'
import { RootReducer } from '../../store'

import * as enums from '../../utils/enums/LabelEnum'
import ContactClass from '../../models/ContactClass'

import { Button, Modal, ModalProps, Form } from 'react-bootstrap'
import { LabelContainer, MyForm } from './styles'

type ModalEditProps = {
  onHide: () => void
  contactName: string
  contactNumber: number
  contactEmail: string
  label: string
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
  const { items } = useSelector((state: RootReducer) => state.contacts)

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

  const isValidEmail = (email: string) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    return emailPattern.test(email)
  }

  const handleSave = () => {
    if (newName.trim() === '' || newNumber.trim() === '') {
      alert('Name and Phone Number are required.')
    } else if (newEmail.trim() !== '' && !isValidEmail(newEmail)) {
      alert('Please enter a valid email address.')
    } else {
      const editedContact = new ContactClass(
        newName,
        parseInt(newNumber),
        newEmail,
        newLabel,
        newFavorite,
        id
      )

      const doesNameExist = items.find(
        (c) =>
          c.contactName.toLowerCase() ===
          editedContact.contactName.toLowerCase()
      )
      const doesNumberExist = items.find(
        (c) => c.contactNumber === editedContact.contactNumber
      )

      const isSameIdName = doesNameExist?.id === editedContact.id
      const isSameIdNumber = doesNumberExist?.id === editedContact.id

      if (doesNameExist && !isSameIdName) {
        alert('There is already a contact with this Name')
      } else if (doesNumberExist && !isSameIdNumber) {
        alert('There is already a contact with this Number')
      } else {
        dispatch(editContact(editedContact))
        onHide()
      }
    }
  }

  return (
    <Modal
      {...modalProps}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton={false}>
        <Modal.Title id="contained-modal-title-vcenter">
          Editing Contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MyForm>
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
          <LabelContainer>
            <Form.Group className="mb-3" controlId="family">
              <Form.Check
                type="checkbox"
                label="Family"
                checked={newLabel === enums.LabelEnum.FAMILY}
                onChange={() =>
                  setNewLabel(
                    newLabel === enums.LabelEnum.FAMILY
                      ? enums.LabelEnum.ANY
                      : enums.LabelEnum.FAMILY
                  )
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="work">
              <Form.Check
                type="checkbox"
                label="Work"
                checked={newLabel === enums.LabelEnum.WORK}
                onChange={() =>
                  setNewLabel(
                    newLabel === enums.LabelEnum.WORK
                      ? enums.LabelEnum.ANY
                      : enums.LabelEnum.WORK
                  )
                }
              />
            </Form.Group>
          </LabelContainer>
          <Form.Group className="mb-3" controlId="favorite">
            <Form.Check
              type="checkbox"
              label="Favorite"
              checked={newFavorite}
              onChange={() => setNewFavorite(!newFavorite)}
            />
          </Form.Group>
        </MyForm>
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
