import { createSlice } from "@reduxjs/toolkit";
import NotesData from '../components/data.jsx';

export const favouritesSlice = createSlice({
  name: "notes",
  initialState: {value: []},
  reducers: {
    addToFavourite: (state, action ) => {
      state.value.push(action.payload)

    }
  }
})
export const  { addToFavourite } = favouritesSlice.actions
export default favoritesSlice.reducer