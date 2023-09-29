import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './reducers/modal'

const store = configureStore({
  reducer: {
    modal: modalReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
