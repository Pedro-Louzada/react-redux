import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    isLogged: false,
  },
  reducers: {
    changeUser(state, { payload }) {
      return {...state, isLogged: true, name: payload}
    },
    logout(state){
      return {...state, isLogged: false, name: ''}
    }
  }
})

export const { changeUser, logout } = slice.actions

//serve para guardar os estados de user
export const selectUser = state => state.user

//nome do reducer para colocar dentro de nossa Store
export default slice.reducer