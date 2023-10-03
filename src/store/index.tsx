import { configureStore } from '@reduxjs/toolkit'

import contactsReducer from './reducers/contact'

const store = configureStore({
  reducer: {
    contacts: contactsReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
