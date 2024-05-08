// NoteDetails.jsx
import React from 'react';

function Note({ note }) {
  return (
    <div className="notee">
      <div className="topOfNote">
      <h2>{note.title}</h2>
      <div className="ellipsis">
      <i class="fa-solid fa-ellipsis-vertical"></i>

      </div>
   

      </div>
      
     
      <p> {note.description}</p>
      {/* You can include other details like image, emoji, etc. if needed */}
      {/*    */}
      {/* <p><strong>Emoji:</strong> {note.emoji}</p> */}
      <p className='noteDate'><strong></strong> {note.date}</p>
    </div>
  );
}

export default Note;
