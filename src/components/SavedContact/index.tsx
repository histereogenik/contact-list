import { useState } from 'react'

import * as Icon from 'react-bootstrap-icons'
import * as S from './styles'
import ModalDelete from '../ModalDelete'

import * as enums from '../../utils/enums/LabelEnum'

type Props = {
  onDelete: () => void
  contactName: string
  contactNumber: number
  contactEmail: string
  label: enums.LabelEnum
  favorite: boolean
}

const SavedContact = ({
  onDelete,
  contactName,
  contactEmail,
  contactNumber
}: Props) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [modalShow, setModalShow] = useState(false)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const handleOpenModal = () => {
    setModalShow(true)
  }

  const handleCloseModal = () => {
    setModalShow(false)
  }

  return (
    <>
      <tr>
        <td>{contactName}</td>
        <td>{contactNumber}</td>
        <td>{contactEmail}</td>
        <td>
          <S.FavoriteButton
            className={isFavorite ? 'star-filled' : ''}
            onClick={toggleFavorite}
          >
            {isFavorite ? '★' : '☆'}
          </S.FavoriteButton>
        </td>
        <td>
          <S.ButtonDelete type="button" onClick={handleOpenModal}>
            <Icon.Trash3 />
          </S.ButtonDelete>

          <ModalDelete
            show={modalShow}
            onHide={handleCloseModal}
            onDelete={onDelete}
          />
        </td>
      </tr>
    </>
  )
}

export default SavedContact
