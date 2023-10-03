import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ContactClass from '../../models/ContactClass'
import * as enums from '../../utils/enums/LabelEnum'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    new ContactClass(
      'Humberto',
      3996966897,
      'huncberth@gogomail.com',
      enums.LabelEnum.FAMILY,
      true,
      1
    ),
    new ContactClass(
      'Algor',
      3996999897,
      'huncberth@gogomail.com',
      enums.LabelEnum.WORK,
      true,
      2
    ),
    new ContactClass(
      'Shurima',
      39999966897,
      'huncberth@gogomail.com',
      enums.LabelEnum.ANY,
      true,
      3
    )
  ],
  reducers: {
    deleteContact: (state, action: PayloadAction<number>) => {
      state = state.filter((contact) => contact.id !== action.payload)
    }
  }
})

export const { deleteContact } = contactsSlice.actions

export default contactsSlice.reducer
