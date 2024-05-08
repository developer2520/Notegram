import {React, useState, useEffect} from 'react'
import appNotionLogo from "../../assets/img/appNotionLogo.png"
import './sidebar.css'
import Durov from '../../assets/img/durov.jpg'
import Notes from '../pages/dashboard/notes.jsx'
import NewNote from './newNote.jsx'
import Settings from './settings.jsx'

export default function sidebar({ addNote }){
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')
  const [selectedNote, setSelectedNote] = useState(null);
  const [newNote,setNewNote] = useState(false)
  const [settings, setSettings] = useState(false)

  console.log(search)

  const handleTitleClick = (note) => {
    setSelectedNote(note); // Set the selected note in the state
  };

  function toggleNote()  {
    setSettings(false)
    setNewNote(!newNote)

  }
  function toggleSetting()  {
    setSettings(!settings)
    setNewNote(false)

  } 
 
  
  

  

  
  return (
    <div className='sidebar'> 
        <div className="logo">
            <img className='logoImg' src={appNotionLogo} alt="" />
        </div>
        <div className="profile side">
            <img className='profileImage' src={Durov} alt=" " />
            <h1>Durov's Notion</h1>
        </div>
        <div className="search side"><i class="fa-solid fa-magnifying-glass"></i>   <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search'/>  </div>
        <button className="settings side" onClick={toggleSetting}><i class="fa-solid fa-gear"></i> <h1>Settings</h1></button>
        <button className="newNote side" onClick={toggleNote}><i class="fa-regular fa-square-plus"></i><h1>New </h1></button>
       
        {newNote && <NewNote addNote={addNote} />}
        {settings && <Settings />}

        
        <section className='notes'><h6>Notes</h6>

        <Notes />
       
        

     




        
        
        </section>

    </div>
  )
}
