import React from 'react'
import './notemore.css'
import { useDispatch } from 'react-redux'
import { deleteNote } from '../features/Notes.js'
export default function noteMore() {
  const dispatch = useDispatch()
  return (

   
    <div className='notemore_div'>
      <button onClick={() => {dispatch(deleteNote(id))}}>Delete</button>
    </div>
  )
}
