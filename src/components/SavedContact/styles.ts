import styled from 'styled-components'
import variables from '../../styles/variables'

export const ContactContainer = styled.tr`
  &:hover {
    background: ${variables.lightGray};
  }

  td {
    padding: 8px 0;

    input {
      margin-left: 8px;
    }
  }

  .name-padding {
    padding-left: 8px;
  }

  .star-filled {
    color: gold;
  }
`

export const ManagerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const ManagerButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 17px;
  user-select: none;
`
export const FavoriteButton = styled(ManagerButton)`
  font-size: 24px;
`
