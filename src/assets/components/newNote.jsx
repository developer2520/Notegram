import React, { useState } from 'react';
import './newnote.css';

export default function NewNote() {
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
      <h1>Write New Note</h1>
      <div className="text">
        <div className="title">
          <input
            className="titleInput"
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="write title"
          />
        </div>
        <div className="main_text">
          <textarea
            className="textInput"
            value={text}
            onChange={handleTextChange}
            placeholder="Write the main text"
          />
        </div>
      </div>
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}
