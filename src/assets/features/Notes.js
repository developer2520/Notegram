import { createSlice } from "@reduxjs/toolkit";


export const notesSlice = createSlice({
  name: "notes",
  initialState: {value: []},
  reducers: {
    addNote: (state, action ) => {
      state.value.push(action.payload)

    },
    deleteNote: (state, action) => {
      
    }

    
    
  }
})
export const  { addNote, deleteNote } = notesSlice.actions
export default notesSlice.reducer