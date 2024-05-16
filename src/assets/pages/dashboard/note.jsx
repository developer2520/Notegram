// NoteDetails.jsx
import {React, useState} from 'react';
import NoteMore from '../../components/noteMore.jsx'

function Note({ note }) {

  const [settings, setSettings] = useState(false)

  const toggleSettings = () => {
    setSettings(true)
    setSettings(!settings)
  }

const categoryAnalyzer = () => {
  if (note.category === "personal") {
    return  <i class="fa-solid fa-user"></i> 
  }
  else if (note.category === "favourite") {
    return <i class="fa-regular fa-heart"></i> 
  }
  else if (note.category === "work") {
    return <i class="fa-solid fa-briefcase"> </i>
  }
  else if (note.category === "study") {
    return <i class="fa-solid fa-school"></i>
  }
  

}
  
  
  return (
    <div className="notee">
      <div className="topOfNote">
      <p className='category'>{categoryAnalyzer()}</p>
      <h2>{note.title}</h2>
      
      
      <button onClick={toggleSettings}  className="ellipsis">
      <i className="fa-solid fa-ellipsis-vertical"></i>

      </button>
   

      </div>

      {settings &&  <NoteMore note={note} /> }
      
     
      <p className='note_description'> {note.description}</p>
      {/* You can include other details like image, emoji, etc. if needed */}
      {/*    */}
      {/* <p><strong>Emoji:</strong> {note.emoji}</p> */}
      <p className='noteDate'><strong></strong> {note.date}</p>
    </div>
  );
}

export default Note;
