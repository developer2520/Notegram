// NoteDetails.jsx
import {React, useState} from 'react';
import NoteMore from '../../components/noteMore.jsx'

function Note({ note }) {

  const [settings, setSettings] = useState(false)

  const toggleSettings = () => {
    setSettings(true)
    setSettings(!settings)
  }
  
  
  return (
    <div className="notee">
      <div className="topOfNote">
      <h2>{note.title}</h2>
      <button onClick={toggleSettings}  className="ellipsis">
      <i className="fa-solid fa-ellipsis-vertical"></i>

      </button>
   

      </div>

      {settings &&  <NoteMore /> }
      
     
      <p className='note_description'> {note.description}</p>
      {/* You can include other details like image, emoji, etc. if needed */}
      {/*    */}
      {/* <p><strong>Emoji:</strong> {note.emoji}</p> */}
      <p className='noteDate'><strong></strong> {note.date}</p>
    </div>
  );
}

export default Note;
