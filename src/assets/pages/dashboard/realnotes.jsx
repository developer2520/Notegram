import React, { useState } from "react";
import Note from "./note.jsx";
import "../dashboard/notes.jsx";
import "./realnotes.css";
import { useSelector } from "react-redux";
import { open } from "../../features/newnote.js";
import { useDispatch } from "react-redux";

export default function realnotes() {
  const NotesRedux = useSelector((state) => state.notes.value);
  const NotesList = NotesRedux.slice().reverse()

  const dispatch = useDispatch()

  console.log(NotesList);
  
  return (
    <>
      <div className="main_grid">
        <h1 className="main-title">All Notes</h1>
        <div className="notes_div">
          {/* {notes.map((note, key) => (
      <Note key={key} note={note} />
    ))} */}

         
          {NotesList.length === 0 ? (<div className="EmptyNotes">
          <i className="fa-solid fa-note-sticky  empty-icon"></i>
          <p>You don't have notes right now.To create a new Note, click the <button onClick={() => dispatch(open())}>new</button> `</p>


          </div>) : (
            NotesList.map((note, key) => (
              <Note key={key} note={note} />
            ))
            
  
          ) }
        </div>
      </div>
    </>
  );
}
