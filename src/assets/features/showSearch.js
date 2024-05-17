import { createSlice } from "@reduxjs/toolkit";

export const showSearch = createSlice({
  name: "showSearch",
  initialState: {value: false},
  reducers: {
    openSearch: (state, action ) => {
      state.value = !state.value

    },
    closeSearch: (state, action) => {
      
      state.value = false
    },
    
  }
})
export const  { openSearch, closeSearch } = showSearch.actions
export default showSearch.reducer