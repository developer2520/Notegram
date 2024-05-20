import React from 'react';
import Sidebar from '../../assets/components/sidebar';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Assuming selectNotes is a function that returns notes from Redux store
import selectNotes from '../../assets/features/Notes.js';

export default function SeparateNote() {
  const { id } = useParams();

  const note = useSelector((state) => {
    const noteList = selectNotes(state); // Fetch notes from Redux store
    return noteList.find((note) => note.id === parseInt(id)); // Find note by id
  });

  if (!note) {
    return <h2>Note not found</h2>;
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className='separateNote'>  
        <h1>{note.title}</h1>
        <p>{note.description}</p>
      </div>
    </div>
  );
}
