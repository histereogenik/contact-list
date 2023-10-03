import { useState } from 'react'
import * as Icon from 'react-bootstrap-icons'

import * as S from './styles'
import ModalDelete from '../ModalDelete'

type Props = {
  onDelete: () => void
}

const SavedContact = ({ onDelete }: Props) => {
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
        <td>Gatinha do tinder so vem</td>
        <td>99999999</td>
        <td>gogo@emais.com</td>
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
