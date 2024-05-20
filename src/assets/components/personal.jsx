import React from 'react'
import Sidebar from './sidebar.jsx'
import { useDispatch, useSelector } from 'react-redux'
import Note from '../pages/dashboard/note.jsx'
import Nothing from './nothing.jsx'

export default function favourites({key}) {
  const NoteList = useSelector((state) => state.notes.value)
  const personalNotes = NoteList.filter((note)=> note.category === "personal")
  return (
    <div style={{display: "flex"}}>
      <Sidebar />
      <div>
        <h1 className="main-title">Personal</h1>
        <div className="notes_div">
        {personalNotes.length === 0 ? (<Nothing />) : (personalNotes.map((note, key) => (
          <Note key={key} note={note} />
        )))}
        </div>

      </div>
    </div>
  )
}
