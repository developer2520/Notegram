import { createSlice } from "@reduxjs/toolkit";

export const newnote = createSlice({
  name: "newnote",
  initialState: {value: false},
  reducers: {
    open: (state, action ) => {
      state.value = !state.value

    },
    close: (state, action) => {
      
      state.value = false
    },
    
  }
})
export const  { open, close } = newnote.actions
export default newnote.reducer