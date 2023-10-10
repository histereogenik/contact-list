import { useDispatch, useSelector } from 'react-redux'

import { deleteContact } from '../../store/reducers/contact'
import { changeTerm } from '../../store/reducers/filter'
import { RootReducer } from '../../store'

import SavedContact from '../../components/SavedContact'
import * as S from './styles'
import * as Icon from 'react-bootstrap-icons'

const ContactList = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.contacts)
  const { term } = useSelector((state: RootReducer) => state.filter)

  const searchIcon = <Icon.Search />

  const testeDelete = () => console.log('deleted!')
  const handleDeleteContact = (contactID: number) => {
    dispatch(deleteContact(contactID))
  }

  return (
    <S.MainContainer>
      <S.SearchContainer>
        <S.SearchIcon>{searchIcon}</S.SearchIcon>
        <S.Search
          type="text"
          placeholder="Search"
          value={term}
          onChange={(e) => dispatch(changeTerm(e.target.value))}
        ></S.Search>
      </S.SearchContainer>
      <S.Table cellSpacing={8}>
        <span> &quot;{term}&ldquo;</span>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>E-mail</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((contact) => (
            <SavedContact
              key={contact.contactNumber}
              contactName={contact.contactName}
              contactNumber={contact.contactNumber}
              contactEmail={contact.contactEmail}
              label={contact.label}
              favorite={contact.favorite}
              id={contact.id}
              onDelete={() => handleDeleteContact(contact.id)}
            />
          ))}
        </tbody>
      </S.Table>
    </S.MainContainer>
  )
}
export default ContactList
