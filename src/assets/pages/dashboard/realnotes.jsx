import React, {useState} from 'react'
import Note from './note.jsx'
import '../dashboard/notes.jsx'
import './realnotes.css'
import { useSelector } from 'react-redux'

export default function realnotes() {

const NotesList = useSelector((state) => state.notes.value)
    
    

    
  return (
    <>
    <div className="main_grid">
    <div className="category">
      <button>All</button>
      <button>Today</button>
      <button>This Week</button>
      <button>Older</button>

    </div>
    <div className='notes_div'>
        {/* {notes.map((note, key) => (
      <Note key={key} note={note} />
    ))} */}

    {NotesList.map((note, key) =>
    <Note key={key} note={note} />
      
      )}


    </div>

      
    </div>
    
    </>
  )
}
