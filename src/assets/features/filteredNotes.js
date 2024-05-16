import { createSlice } from "@reduxjs/toolkit";
import notes from "../pages/dashboard/notes";


export const notesSlice = createSlice({
  name: "filteredNotes",
  initialState: {
  value: localStorage.getItem
  },
  reducers: {
    filter: (state, action ) => {
      
      

    },
   

    
    
  }
},
)


export const  { addNote, deleteNote, deleteAllNotes } = notesSlice.actions
export default notesSlice.reducer