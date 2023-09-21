import SavedContact from '../../components/SavedContact'
import * as S from './styles'

import * as Icon from 'react-bootstrap-icons'

const ContactList = () => {
  const searchIcon = <Icon.Search />
  return (
    <main>
      <S.SearchContainer>
        <S.SearchIcon>{searchIcon}</S.SearchIcon>
        <S.Search type="text" placeholder="Search"></S.Search>
      </S.SearchContainer>
      <S.Table cellSpacing={8}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>E-mail</th>
            <th>Favorite</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <SavedContact />
          <SavedContact />
          <SavedContact />
          <SavedContact />
        </tbody>
      </S.Table>
    </main>
  )
}
export default ContactList
