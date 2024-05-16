import React from 'react'
import Sidebar from './sidebar.jsx'
import { useDispatch, useSelector } from 'react-redux'
import Note from '../pages/dashboard/note.jsx'

export default function favourites({key}) {
  const NoteList = useSelector((state) => state.notes.value)
  const studyNotes = NoteList.filter((note)=> note.category === "study")
  return (
    <div style={{display: "flex"}}>
      <Sidebar />
      <div>
        <h1 className="main-title">Study</h1>
        <div className="notes_div">
        {studyNotes.map((note, key) => (
          <Note key={key} note={note} />
        ))}
        </div>

      </div>
    </div>
  )
}
