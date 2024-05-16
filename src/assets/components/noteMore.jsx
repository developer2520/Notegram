import React from 'react'
import './notemore.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../features/Notes.js'
export default function noteMore( {note} ) {
  const dispatch = useDispatch()
  const notes = useSelector((state) => state.notes.value);
  return (

   
    <div className='notemore_div'>
      <button onClick={() => {dispatch(deleteNote(note.id))}}>Delete</button>
      <button>Edit</button>
      <button>Info</button>
    </div>
  )
}
