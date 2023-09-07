import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import * as Icon from 'react-bootstrap-icons'
import FilterCard from '../../components/FilterCard'

const Sidebar = () => {
  const dispatch = useDispatch()

  return (
    <S.Aside>
      <div>
        <Icon.PersonCircle /> Contacts
        <button>
          <Icon.PersonFillAdd /> Create contact
        </button>
        <S.Filters>
          <FilterCard />
          <FilterCard />
          <FilterCard />
          <FilterCard ativo />
        </S.Filters>
      </div>
    </S.Aside>
  )
}
export default Sidebar
