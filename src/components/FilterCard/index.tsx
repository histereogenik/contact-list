import { useDispatch, useSelector } from 'react-redux'

import { changeFilter } from '../../store/reducers/filter'

import * as enums from '../../utils/enums/LabelEnum'

import * as S from './styles'
import * as Icon from 'react-bootstrap-icons'
import { RootReducer } from '../../store'

export type Props = {
  counter: number
  label?: string
  criteria: 'label' | 'favorite' | 'all'
  value: enums.LabelEnum
}

const FilterCard = ({ counter, label, criteria, value }: Props) => {
  const dispatch = useDispatch()
  const { filter } = useSelector((state: RootReducer) => state)

  const verifyIfActive = () => {
    const sameCriteria = filter.criteria === criteria
    const sameValue = filter.value === value

    return sameCriteria && sameValue
  }

  const filterContacts = () => {
    dispatch(
      changeFilter({
        criteria,
        value
      })
    )
  }
  const isActive = verifyIfActive()

  return (
    <S.Card active={isActive} onClick={filterContacts}>
      <div>
        <Icon.PersonFill />
        <S.Label>{label}</S.Label>
      </div>
      <S.Counter>{counter}</S.Counter>
    </S.Card>
  )
}

export default FilterCard
