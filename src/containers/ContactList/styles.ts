import styled from 'styled-components'
import variables from '../../styles/variables'

export const MainContainer = styled.main`
  height: 100vh;
  overflow-y: scroll;
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
export const Table = styled.table`
  text-wrap: nowrap;
  padding: 16px;
  width: 90%;
  text-align: left;

  thead {
    margin-bottom: 10px;
  }

  th {
    padding: 4px 0;
    border-bottom: 1px solid ${variables.lightGray};
  }

  td {
    padding: 8px 0;

    input {
      margin-left: 8px;
    }
  }

  .star-filled {
    color: gold;
  }
`
