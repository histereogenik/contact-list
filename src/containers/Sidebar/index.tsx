import * as enums from '../../utils/enums/LabelEnum'

import * as S from './styles'
import * as Icon from 'react-bootstrap-icons'
import FilterCard from '../../components/FilterCard'

const Sidebar = () => {
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
