import React, { useState } from 'react';
import './newnote.css';
import { useDispatch } from 'react-redux';
import { addNote } from '../features/Notes.js'
import { format } from 'date-fns'
import { current } from '@reduxjs/toolkit';
import {close} from '../features/newnote.js'

// import { format }

export default function NewNote() {

  const dispatch = useDispatch()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState('')
  const [category, setCategory] = useState()


  const formatDate = () => {
    const currentDate = Date()
    const formattedDate = format(currentDate, 'dd-MM-yyyy')

    setDate(formattedDate)
  }
  useState(() => {
    formatDate();
  }, []);

  

  // const submitAndClose = () => {
  //   {dispatch(addNote())}

  // }
 
  
  // const [title, setTitle] = useState('');
  // const [text, setText] = useState('');

  // const handleTitleChange = (event) => {
  //   setTitle(event.target.value);
  // };
  

  // const handleTextChange = (event) => {
  //   setText(event.target.value);
  // };

  // const handleSubmit = () => {
  //   if (title.trim() !== '' && text.trim() !== '') {
  //     // Call the addNote function passed from the parent component
  //     // Pass the title and text as parameters
  //     addNote({
  //       title: title,
  //       text: text
  //     });

  //     // Clear the input fields after submission
  //     setTitle('');
  //     setText('');
  //   }
  // };

  return (
    <div className="note">
      <div className="topofthenewnote">
        <h1>Write new Note</h1>
        <button onClick={() => dispatch(close())} className='x-button-close'><i className="fa-solid fa-circle-xmark"></i></button>
        
      </div>
      <div className="text">
        <div className="title">
          <input
            className="titleInput"
            type="text"
            onChange={(event) => {setTitle(event.target.value)}}
            
           
            placeholder="write title"
          />
        </div>
        <div className="main_text">
          <textarea
            className="textInput"
            onChange={(event) => {setDescription(event.target.value)}}
           
            placeholder="Write the main text"
          />
        </div>
      </div>
      <button onClick={() => {dispatch(addNote({id: crypto.randomUUID(), title, description, date})); dispatch(close())}} >Save</button>
    </div>
  );
}
