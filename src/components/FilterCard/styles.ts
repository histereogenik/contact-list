import styled from 'styled-components'
import variables from '../../styles/variables'

type Props = {
  active: string
}

export const Card = styled.div<Props>`
  padding: 8px;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  cursor: pointer;
  background-color: ${(props) =>
    props.active === 'true' ? variables.lightGray : variables.white};
  div {
    display: flex;
    align-items: center;
  }
`
export const Label = styled.span`
  margin-left: 16px;
  color: ${variables.darkGray};
`
export const Counter = styled.span`
  color: ${variables.gray};
`
