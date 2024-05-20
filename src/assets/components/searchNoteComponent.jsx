import React from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import './searchnotecomponent.css'
import { useSelector } from 'react-redux';
import { closeSettings } from '../features/showSettings';
import { useDispatch } from 'react-redux';


export default function searchNoteComponent({note}) {

  const { id } = useParams();
  const dispatch = useDispatch()
  const notes = useSelector((state) => state.notes.value)
  
  const noteLink = notes.find(note => note.id === id)



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

       <Link  to={`/seperatenote/${note.id}`} onClick={() => dispatch(closeSettings())} >
  
  
      <h3>{note.title}</h3>
      <h3>{categoryAnalyzer()}</h3>

      </Link>

     
      
      </div>
  )
}
