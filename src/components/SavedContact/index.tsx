import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Icon from 'react-bootstrap-icons'

import * as S from './styles'
import ModalDelete from '../ModalDelete'

import { closeModal, openModal } from '../../store/reducers/modal'
import { RootReducer } from '../../store'

const SavedContact = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const dispatch = useDispatch()
  const { showModal } = useSelector((state: RootReducer) => state.modal)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const handleOpenModal = () => {
    dispatch(openModal())
  }

  const handleCloseModal = () => {
    dispatch(closeModal())
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
          {showModal && <ModalDelete closeModal={handleCloseModal} />}
        </td>
      </tr>
    </>
  )
}

export default SavedContact
