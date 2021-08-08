import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { CurrentPath } from 'features/types/types'

const initialState: CurrentPath = {
  currentPath: '/',
}

export const currentPathSlice = createSlice({
  name: 'currentPath',
  initialState,
  reducers: {
    updatePath: (state, action) => {
      state.currentPath = action.payload
    },
  },
})

export const { updatePath } = currentPathSlice.actions

export const selectPath = (state: RootState) => state.curerntPath

export default currentPathSlice.reducer
