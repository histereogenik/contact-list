import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import ContactClass from '../../models/ContactClass'

import * as enums from '../../utils/enums/LabelEnum'

type ContactsState = {
  items: ContactClass[]
}

const initialState: ContactsState = {
  items: [
    {
      contactName: 'Humberto',
      contactNumber: 3996966897,
      contactEmail: 'huncberth@gogomail.com',
      label: enums.LabelEnum.FAMILY,
      favorite: true,
      id: 1
    },
    {
      contactName: 'Algor',
      contactNumber: 3996999897,
      contactEmail: 'huncberth@gogomail.com',
      label: enums.LabelEnum.WORK,
      favorite: false,
      id: 2
    },
    {
      contactName: 'Shurima',
      contactNumber: 39999966897,
      contactEmail: 'huncberth@gogomail.com',
      label: enums.LabelEnum.ANY,
      favorite: true,
      id: 3
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteContact: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      )
    },
    editContact: (state, action: PayloadAction<ContactClass>) => {
      const contactIndex = state.items.findIndex(
        (c) => c.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload
      }
    }
  }
})

export const { deleteContact, editContact } = contactsSlice.actions

export default contactsSlice.reducer
