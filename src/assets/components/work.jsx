import React from 'react'
import Sidebar from './sidebar.jsx'
import { useDispatch, useSelector } from 'react-redux'
import Note from '../pages/dashboard/note.jsx'

export default function favourites({key}) {
  const NoteList = useSelector((state) => state.notes.value)
  const workNotes = NoteList.filter((note)=> note.category === "work")
  return (
    <div style={{display: "flex"}}>
      <Sidebar />
      <div>
      <h1 className="main-title">Work</h1>
      <div className="notes_div">
        {workNotes.map((note, key) => (
          <Note key={key} note={note} />
        ))}
        </div>

      </div>
    </div>
  )
}
