import * as S from './styles'
import * as Icon from 'react-bootstrap-icons'

export type Props = {
  active?: boolean
  counter: number
  label?: string
}

const FilterCard = ({ active, counter, label }: Props) => (
  <S.Card active={active}>
    <div>
      <Icon.PersonFill />
      <S.Label>{label}</S.Label>
    </div>
    <S.Counter>{counter}</S.Counter>
  </S.Card>
)

export default FilterCard
