import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import currentPathSlice from 'features/currentPath/currentPathSlice'
import authSlice from 'features/auth/authSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    curerntPath: currentPathSlice,
    auth: authSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
