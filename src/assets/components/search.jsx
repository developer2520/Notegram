import React from 'react'
import './search.css'
import { useSelector, useDispatch } from 'react-redux'
import { close } from '../features/newnote'



export default function search() {
    const yourNotes = useSelector((state) => state.notes.value)
    const dispatch = useDispatch()
  return (
    <div className='search_div'>
        
        
        <form>
            <div className="input_div">
            <i class="fa-solid fa-magnifying-glass searchIcon"></i>
            <input type="search" placeholder='Search your notes' />

            <button className="closeButton" onClick={() => dispatch(close())}>
            <i class="fa-solid fa-circle-xmark xmark"></i>

            </button>
           

            </div>
            <hr />
            <div className="your_notes">
                <h6>Your Notes</h6>
                {yourNotes.map((note) => <p>{note.title}</p>)}

            </div>

            
           
        </form>
        
    </div>
  )
}
