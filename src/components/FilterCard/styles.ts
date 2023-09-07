import styled from 'styled-components'

import variables from '../../styles/variables'
import { Props } from '.'

export const Card = styled.div<Props>`
  padding: 8px;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background-color: ${(props) =>
    props.ativo ? variables.pink : variables.purple};
  div {
    display: flex;
    align-items: center;
  }
`
export const Label = styled.span`
  margin-left: 16px;
`
export const Counter = styled.span``
