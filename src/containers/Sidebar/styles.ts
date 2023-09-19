import styled from 'styled-components'
import variables from '../../styles/variables'

export const Aside = styled.aside`
  padding: 16px;
  height: 100vh;
  display: block;
`
export const AppName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;

  span {
    color: ${variables.darkGray};
  }
`
export const AddContact = styled.button`
  display: block;
  height: 48px;
  width: 88%;
  border-radius: 24px;
  font-size: 14px;
  border: none;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.3);
    background-color: ${variables.lightGray};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .custom-icon {
      font-size: 18px;
    }
  }
`
export const Filters = styled.div`
  margin-top: 16px;
`
