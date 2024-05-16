import { createSlice } from "@reduxjs/toolkit";
import notes from "../pages/dashboard/notes";


export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    value: localStorage.getItem("LocalStorageNotes") ?  JSON.parse(localStorage.getItem("LocalStorageNotes")) : []
  },
  reducers: {
    addNote: (state, action ) => {
      state.value.push(action.payload);
      localStorage.setItem('LocalStorageNotes', JSON.stringify(state.value))

    },
    deleteNote: (state, action) => {
       const noteIdToDelete = action.payload;
      state.value = state.value.filter((note) => note.id !== noteIdToDelete);
      localStorage.setItem("LocalStorageNotes", JSON.stringify(state.value));
      
    },
    deleteAllNotes: (state, action) => {
      state.value = []
      
    }

    
    
  }
},
)


export const  { addNote, deleteNote, deleteAllNotes } = notesSlice.actions
export default notesSlice.reducer