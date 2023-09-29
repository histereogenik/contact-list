import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ModalState = {
  showModal: boolean
}

const initialState: ModalState = {
  showModal: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.showModal = true
    },
    closeModal: (state) => {
      state.showModal = false
    }
  }
})

export const { closeModal, openModal } = modalSlice.actions
export default modalSlice.reducer
