  import React from 'react'
  import './search.css'
  import { useSelector, useDispatch,  } from 'react-redux'
  import { closeSearch } from '../features/showSearch'
  import { useState, useEffect } from 'react'
  import SearchNoteComponent from './searchNoteComponent'
  import { useRef } from 'react'



  export default function search() {
      const yourNotes = useSelector((state) => state.notes.value)
      const dispatch = useDispatch()
      const [search, setSearch] = useState("");
      const noteModal = useRef();

      
      
      const filteredNotes = Array.isArray(yourNotes)
      ? yourNotes.filter(note => 
          note.title.toLowerCase().includes(search.toLowerCase())
      )
      : [];
      


      const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
      const handleClickOutsideModal = (event) => {
        if (noteModal.current && !noteModal.current.contains(event.target)) {
          dispatch(closeSearch());
        }
      };
      document.addEventListener("mousedown", handleClickOutsideModal);
      return;
    }, []);

    return (
      <div className='search_div'>
          
          
          <form>
              <div className="input_div">
              <i class="fa-solid fa-magnifying-glass searchIcon"></i>
              <input type="text" placeholder='Search your notes' onChange={handleSearchChange} />

              <button className="closeButton" onClick={() => dispatch(closeSearch())}>
              <i class="fa-solid fa-circle-xmark xmark"></i>

              </button>
            

              </div>
              <hr />
              <div className="your_notes">
                  
                  {filteredNotes.length === 0 ? (
                    <div className="emptyNotes">
                      <i class="fa-solid fa-ban"></i>
                      <h4>Not found</h4>
                    </div>
                  ) :
                  filteredNotes.map((note) => <SearchNoteComponent note={note} />)}
                

              </div>

              
            
          </form>
          
      </div>
    )
  }
