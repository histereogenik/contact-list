import { Button, Modal, ModalProps } from 'react-bootstrap'

import { DetailedHTMLProps, HTMLAttributes, RefObject, ReactNode } from 'react'
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers'
import { ItalicP } from './styles'

function ModalDelete(
  props: JSX.IntrinsicAttributes &
    Omit<
      Omit<
        DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        'ref'
      > & {
        ref?:
          | ((instance: HTMLDivElement | null) => void)
          | RefObject<HTMLDivElement>
          | null
          | undefined
      },
      BsPrefixProps<'div'> & ModalProps
    > &
    BsPrefixProps<'div'> &
    ModalProps & { children?: ReactNode }
) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
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
        <Button variant="secondary" onClick={props.onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={props.onHide}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalDelete
