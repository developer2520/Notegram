// NoteDetails.jsx
import React from 'react';

function Note({ note }) {
  return (
    <div className="note-details">
      <h2>{note.title}</h2>
      <p><strong>Date:</strong> {note.date}</p>
      <p><strong>Description:</strong> {note.description}</p>
      {/* You can include other details like image, emoji, etc. if needed */}
      <img src={note.img} alt="Note Image" />
      <p><strong>Emoji:</strong> {note.emoji}</p>
    </div>
  );
}

export default Note;
