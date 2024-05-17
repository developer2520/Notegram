import React from 'react'
import './notemore.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../features/Notes.js'
export default function noteMore( {note} ) {
  const dispatch = useDispatch()
  const notes = useSelector((state) => state.notes.value);
  const totalWords = (note.title + ' ' + note.description).split(/\s+/).filter(word => word.length > 0).length;

  return (

   
    <div className='notemore_div'>
      <button onClick={() => {dispatch(deleteNote(note.id))}}>Delete</button>
      <button>Edit</button>
      <button>Info</button>
      <p>Word count: {totalWords}</p>
      <p>{note.time}</p>
    </div>
  )
}
