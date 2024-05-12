import { createSlice } from "@reduxjs/toolkit";
import NotesData from '../components/data.jsx';

export const notesSlice = createSlice({
  name: "notes",
  initialState: {value: []},
  reducers: {
    addNote: (state, action ) => {
      state.value.push(action.payload)

    },
    deleteNote: (state, action) => {
      state.value = state.value.filter((user) => user.id != action.payload)
    },
  }
})
export const  { addNote, deleteNote } = notesSlice.actions
export default notesSlice.reducer