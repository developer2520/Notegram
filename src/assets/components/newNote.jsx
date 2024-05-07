import React from 'react'
import './newnote.css'

export default function newNote() {
  return (
    <div className='note'>
        <h1>Write New Note</h1>
        <div className="text">
            <div className="title">
                <input className='titleInput' type="text" placeholder='write title' />
            </div>
            <div className="main_text">
                <textarea className='textInput' type="text" placeholder='Write the main text'/>
            </div>
        </div>
        <button>Save</button>
    </div>
  )
}
