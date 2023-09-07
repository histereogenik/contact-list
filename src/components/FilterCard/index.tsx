import * as S from './styles'
import * as Icon from 'react-bootstrap-icons'

export type Props = {
  ativo?: boolean
}

const FilterCard = (props: Props) => (
  <S.Card ativo={props.ativo}>
    <div>
      <Icon.PersonFill />
      <S.Label>Contacts</S.Label>
    </div>
    <S.Counter>50</S.Counter>
  </S.Card>
)

export default FilterCard
