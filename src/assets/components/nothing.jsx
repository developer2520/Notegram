import React from 'react'

export default function nothing() {
  return (
    <div className="EmptyNotes">
      <i className="fa-solid fa-note-sticky  empty-icon"></i>
      <p>You don't have notes right now.To create a new Note, click the <button onClick={() => dispatch(open())}>new</button> `</p>


    </div>
  )
}
