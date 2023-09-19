import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import * as Icon from 'react-bootstrap-icons'
import FilterCard from '../../components/FilterCard'

const Sidebar = () => {
  const dispatch = useDispatch()

  return (
    <S.Aside>
      <div>
        <S.AppName>
          <Icon.ColumnsGap /> <span>Contacts</span>
        </S.AppName>
        <S.AddContact>
          <div>
            <Icon.PersonFillAdd className="custom-icon" />{' '}
            <span>Create contact</span>
          </div>
        </S.AddContact>
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
