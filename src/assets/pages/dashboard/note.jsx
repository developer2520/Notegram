// NoteDetails.jsx
import {React, useState} from 'react';
import NoteMore from '../../components/noteMore.jsx'
import SeperateNote from '../../components/seperateNote.jsx'
import {Link} from 'react-router-dom'




function Note({ note, time }) {
  

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

    <Link style={{textDecoration: "none",color: "black"}} to={`/seperatenote/${note.id}`} >
    <div className="notee" >
      <p className='category'>{categoryAnalyzer()}</p>
      <div className="topOfNote">
      
      <h2>{note.title}</h2>
      
      
      <button onClick={toggleSettings}  className="ellipsis">
      <i className="fa-solid fa-ellipsis-vertical"></i>

      </button>
   

      </div>

      {settings &&  <NoteMore note={note} time={time} /> }
      
      
     
      <p className='note_description'> {note.description}</p>
      {/* You can include other details like image, emoji, etc. if needed */}
      {/*    */}
      {/* <p><strong>Emoji:</strong> {note.emoji}</p> */}
      <p className='noteDate'> {note.date}</p>
      
    </div>
    </Link>
  );
}

export default Note;
