import { createSlice } from "@reduxjs/toolkit";
import seperateNote from "../components/seperateNote";

export const showSeperateNote = createSlice({
  name: "seperateNote",
  initialState: {value: false},
  reducers: {
    openSeperateNote: (state, action ) => {
      state.value = !state.value

    },
    closeSeperateNote: (state, action) => {
      
      state.value = false
    },
    
  }
})
export const  { openSeperateNote, closeSeperateNote } = seperateNote.actions
export default showSeperateNote.reducer