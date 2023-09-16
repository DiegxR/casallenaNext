import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { userSlice } from './features/usersSlice'
import { userApi } from './services/userService'

const reducer = {
  user: userSlice.reducer,
  [userApi.reducerPath]: userApi.reducer,
}

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware]),
})

setupListeners(store.dispatch)
