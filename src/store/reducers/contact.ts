import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Contact = {
  id: number
  name: string
  phoneNumber: number
  email: string
}

type ContactsState = {
  contacts: Contact[]
}

const initialState: ContactsState = {
  contacts: []
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      )
    }
  }
})

export const { deleteContact } = contactsSlice.actions

export default contactsSlice.reducer
