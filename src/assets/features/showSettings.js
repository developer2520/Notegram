import { createSlice } from "@reduxjs/toolkit";

export const showSettings = createSlice({
  name: "showSettings",
  initialState: {value: false},
  reducers: {
    openSettings: (state, action ) => {
      state.value = !state.value

    },
    closeSettings: (state, action) => {
      
      state.value = false
    },
    
  }
})
export const  { openSettings, closeSettings } = showSettings.actions
export default showSettings.reducer