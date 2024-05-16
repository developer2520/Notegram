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
    return  <p className='personalCategory catt1'>personal</p>
  }
  else if (note.category === "favourite") {
    return <p className='personalCategory catt2'>favourites</p>
  }
  else if (note.category === "work") {
    return <p className='personalCategory catt3'>work</p>
  }
  else if (note.category === "study") {
    return <p className='personalCategory catt4'>study</p>
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
