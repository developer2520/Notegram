import { createSlice } from "@reduxjs/toolkit";

export const DarkMode = createSlice({
  name: "DarkMode",
  initialState: {value: false},
  reducers: {
    setDark: (state, action ) => {
      state.value = !state.value

    },
    setLight: (state, action) => {
      
      state.value = false
    },
    
  }
})
export const  { openSettings, closeSettings } = showSettings.actions
export default showSettings.reducer