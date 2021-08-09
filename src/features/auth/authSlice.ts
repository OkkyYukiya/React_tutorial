import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { authInitialState } from 'features/types/types'

const initialState: authInitialState = {
  isOpenLoginModal: false,
  isLoadingAuth: false,
  myprofile: {
    nickName: '',
    created_at: '',
    photoUrl: '',
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchCredStart: (state) => {
      state.isOpenLoginModal = true
    },
    fetchCredEnd: (state) => {
      state.isOpenLoginModal = false
    },
    openLoginModal: (state) => {
      state.isOpenLoginModal = true
    },
    closeLoginModal: (state) => {
      state.isOpenLoginModal = false
    },
  },
})

export const { fetchCredEnd, fetchCredStart, openLoginModal, closeLoginModal } =
  authSlice.actions

export const selectIsOpenLoginModal = (state: RootState) =>
  state.auth.isOpenLoginModal

export default authSlice.reducer
