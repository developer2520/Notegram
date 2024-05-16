import React from 'react'
import './settings.css'
import Sidebar from './sidebar'
import { useDispatch } from 'react-redux'
import { deleteAllNotes } from '../features/Notes'
import { useSelector } from 'react-redux'

export default function Settings() {
  const NotesList = useSelector((state) => state.notes.value);
  const dispatch = useDispatch()
  return (
    <>

    <div className='settingsMain'>
    <Sidebar />
    <div className='settingsCard'>
        <h1>Settings</h1>
        <div className="deleting_section">

          {NotesList.length === 0 ?( <p>You don't have notes.If you want to create notes.Click "New"  button in the sidebar </p>) : ( <>
          
          <p>You have  <b>{NotesList.length} </b> {NotesList.length === 1? 'note' : 'notes'}.If you want to delete {NotesList.length === 1 ? "it" : "them"}  click the button below </p>
        
        <button className='button' onClick={() => dispatch(deleteAllNotes())}>Delete all notes</button></>)}
        
    


        </div>
        
        
     </div>
     </div>
        

        </>
    
  )
}
