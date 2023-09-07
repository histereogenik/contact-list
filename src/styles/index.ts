import { createGlobalStyle, styled } from 'styled-components'
import variables from './variables'

const EstiloGlobal = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
    color: ${variables.beige};
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  background-color: ${variables.purple};
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export default EstiloGlobal
