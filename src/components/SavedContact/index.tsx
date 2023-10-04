import { useState } from 'react'

import * as Icon from 'react-bootstrap-icons'
import * as S from './styles'
import ModalDelete from '../ModalDelete'

import * as enums from '../../utils/enums/LabelEnum'
import ModalEdit from '../ModalEdit'

type Props = {
  onDelete: () => void
  contactName: string
  contactNumber: number
  contactEmail: string
  label: enums.LabelEnum
  favorite: boolean
  id: number
}

const SavedContact = ({
  onDelete,
  contactName,
  contactEmail,
  contactNumber,
  label,
  favorite,
  id
}: Props) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [modalDeleteShow, setModalDeleteShow] = useState(false)
  const [modalEditShow, setModalEditShow] = useState(false)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const handleOpenModalDelete = () => {
    setModalDeleteShow(true)
  }

  const handleCloseModalDelete = () => {
    setModalDeleteShow(false)
  }

  const handleOpenModalEdit = () => {
    setModalEditShow(true)
  }

  const handleCloseModalEdit = () => {
    setModalEditShow(false)
  }

  return (
    <>
      <S.ContactContainer>
        <td className="name-padding">{contactName}</td>
        <td>{contactNumber}</td>
        <td>{contactEmail}</td>
        <td>
          <S.ManagerContainer>
            <S.FavoriteButton
              className={isFavorite ? 'star-filled' : ''}
              onClick={toggleFavorite}
            >
              {isFavorite ? '★' : '☆'}
            </S.FavoriteButton>

            <S.ManagerButton type="button" onClick={handleOpenModalEdit}>
              <Icon.Pencil />
            </S.ManagerButton>

            <ModalEdit
              show={modalEditShow}
              onHide={handleCloseModalEdit}
              contactName={contactName}
              contactEmail={contactEmail}
              contactNumber={contactNumber}
              label={label}
              favorite={favorite}
              id={id}
            />

            <S.ManagerButton type="button" onClick={handleOpenModalDelete}>
              <Icon.Trash3 />
            </S.ManagerButton>

            <ModalDelete
              show={modalDeleteShow}
              onHide={handleCloseModalDelete}
              onDelete={onDelete}
            />
          </S.ManagerContainer>
        </td>
      </S.ContactContainer>
    </>
  )
}

export default SavedContact
