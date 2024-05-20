import React from 'react';
import './seperatenote.css'
import Sidebar from '../../assets/components/sidebar';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Assuming selectNotes is a function that returns notes from Redux store
import selectNotes from '../../assets/features/Notes.js';

export default function SeparateNote() {
  const { id } = useParams();
  const notes = useSelector((state) => state.notes.value)
  
  const note = notes.find(note => note.id === id)


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
