import { useDispatch, useSelector } from 'react-redux'

import { deleteContact } from '../../store/reducers/contact'
import { RootReducer } from '../../store'

import SavedContact from '../../components/SavedContact'
import * as S from './styles'

import * as Icon from 'react-bootstrap-icons'

const ContactList = () => {
  const dispatch = useDispatch()
  const contacts = useSelector((state: RootReducer) => state.contacts.contacts)

  const searchIcon = <Icon.Search />

  const testDelete = () => console.log('deleted')
  const handleDeleteContact = (contactID: number) => {
    dispatch(deleteContact(contactID))
  }

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
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <SavedContact onDelete={() => testDelete()} />
          {contacts.map((contact) => (
            <SavedContact
              key={contact.id}
              onDelete={() => handleDeleteContact(contact.id)}
            />
          ))}
        </tbody>
      </S.Table>
    </main>
  )
}
export default ContactList
