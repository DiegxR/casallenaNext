import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    email: '',
    city: '',
    name: '',
    type: '',
    token: '',
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      console.log('🚀 ~ file: usersSlice.js:17 ~ payload:', payload)
      /* state.user.email = payload?.user.email
      state.user.name = payload?.user.name
      state.user.city = payload?.user.city
      state.user.type = payload?.user.type
      state.user.token = payload?.token */
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
