import React from 'react'
import './searchnotecomponent.css'

export default function searchNoteComponent({note}) {

  const categoryAnalyzer = () => {
    if (note.category === "personal") {
      return  <p className='badge catt1'>personal</p>
    }
    else if (note.category === "favourite") {
      return <p className='badge catt2'>favourites</p>
    }
    else if (note.category === "work") {
      return <p className='badge catt3'>work</p>
    }
    else if (note.category === "study") {
      return <p className='badge catt4'>study</p>
    }
    
  
  }
    
  return (
    <div className='searchNoteComponent'>
      <h3>{note.title}</h3>
      <h3>{categoryAnalyzer()}</h3>
      
      </div>
  )
}
