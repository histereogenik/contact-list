import { useState } from 'react'

import * as enums from '../../utils/enums/LabelEnum'

import * as S from './styles'
import * as Icon from 'react-bootstrap-icons'
import FilterCard from '../../components/FilterCard'
import ModalCreate from '../../components/ModalCreate'

const Sidebar = () => {
  const [modalCreateShow, setModalCreateShow] = useState(false)

  const handleOpenModalCreate = () => {
    setModalCreateShow(true)
  }

  const handleCloseModalCreate = () => {
    setModalCreateShow(false)
  }

  return (
    <S.Aside>
      <div>
        <S.AppName>
          <Icon.ColumnsGap /> <span>Contacts</span>
        </S.AppName>

        <S.AddContact onClick={handleOpenModalCreate}>
          <div>
            <Icon.PersonFillAdd className="custom-icon" />{' '}
            <span>Create contact</span>
          </div>
        </S.AddContact>

        <ModalCreate show={modalCreateShow} onHide={handleCloseModalCreate} />

        <S.Filters>
          <FilterCard
            value={enums.LabelEnum.ANY}
            criteria="all"
            label="Contacts"
          />
          <FilterCard
            value={enums.LabelEnum.FAVORITE}
            criteria="favorite"
            label="Favorites"
          />
          <FilterCard
            value={enums.LabelEnum.WORK}
            criteria="label"
            label="Work"
          />
          <FilterCard
            value={enums.LabelEnum.FAMILY}
            criteria="label"
            label="Family"
          />
        </S.Filters>
      </div>
    </S.Aside>
  )
}
export default Sidebar
