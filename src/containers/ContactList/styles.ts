import styled from 'styled-components'
import variables from '../../styles/variables'
import { Table as ReactTable } from 'react-bootstrap'

export const MainContainer = styled.main`
  height: 100vh;
  overflow-y: scroll;

  @media (max-witdth: 767px) {
    overflow-y: visible;
  }
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 8px 0;
  height: 64px;
`
export const SearchIcon = styled.button`
  background: ${variables.lightGray};
  border: 1px solid transparent;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  cursor: pointer;
  padding: 8px 16px;
  font-size: 16px;
  height: 100%;
`
export const Search = styled.input`
  background: ${variables.lightGray};
  border: 1px solid transparent;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 16px;
  width: 100%;
  max-width: 720px;
  height: 100%;

  &:focus {
    outline: none;
  }
`
export const Table = styled(ReactTable)`
  text-wrap: nowrap;
  width: 95%;
  text-align: left;
  border-collapse: collapse;

  thead {
    margin-bottom: 10px;
  }

  th {
    padding: 4px 0;
    min-width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .email-column {
    display: table-cell;

    @media (max-width: 1024px) {
      display: none;
    }
  }
  .number-column {
    display: table-cell;

    @media (max-width: 767px) {
      display: none;
    }
  }
`
