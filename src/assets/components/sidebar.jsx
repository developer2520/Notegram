import { React, useState, useEffect } from "react";
import appNotionLogo from "../../assets/img/appNotionLogo.png";
import "./sidebar.css";
import Durov from "../../assets/img/durov.jpg";
import Notes from "../pages/dashboard/notes.jsx";
import NewNote from "./newNote.jsx";
import Settings from "./settings.jsx";
import { useDispatch, useSelector } from "react-redux";
import {openSearch, closeSearch } from "../features/showSearch.js";
import showSearch from "../features/showSearch.js";
import { open, close } from "../features/newnote.js";



import { openSettings, closeSettings } from "../features/showSettings.js";
import { Link } from "react-router-dom";
import Search from './search.jsx'

export default function sidebar() {
  // const [activeTab, setActiveTab] = useState(allnotes)
  // const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  // const [selectedNote, setSelectedNote] = useState(null);
  // const [newNote,setNewNote] = useState(false)
  // const [settings, setSettings] = useState(false)

  console.log(search);

  // const handleTitleClick = (note) => {
  //   setSelectedNote(note); // Set the selected note in the state
  // };

  // function toggleNote()  {
  //   setSettings(false)
  //   setNewNote(!newNote)

  // }
  // function toggleSetting()  {
  //   setSettings(!settings)
  //   setNewNote(false)

  // }

  const dispatch = useDispatch();
  const newNote = useSelector((state) => state.newnote.value);
  const showSearch = useSelector((state) => state.showSearch.value)
  const showSettings = useSelector((state) => state.showSettings.value);

  console.log(showSettings);

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <div className="logo">
          <img className="logoImg" src={appNotionLogo} alt="" />
        </div>
        <div className="profile side">
          <img className="profileImage" src={Durov} alt=" " />
          <h1>Durov's Notion</h1>
        </div>
        <button className="search side" onClick={() => dispatch(openSearch())}>
          <i className="fa-solid fa-magnifying-glass"></i>{" "}
          <h1>Search</h1>
          
        </button>

        <button className="newNote side" onClick={() => dispatch(open())}>
          <i className="fa-regular fa-square-plus"></i>
          <h1>New </h1>
        </button>

        <Link to="/home" className="main side">
          <i className="fa-solid fa-house"></i>
          <h1>All Notes </h1>
        </Link>

        <Link to="/favourites" className="Favourite side">
          <i className="fa-regular fa-heart"></i>
          <h1>Favourite </h1>
        </Link>
        <Link to="/work" className="work side">
          <i className="fa-solid fa-briefcase"></i>
          <h1>Work </h1>
        </Link>
        <Link to="/study" className="study side">
          <i className="fa-solid fa-school"></i>
          <h1>Study </h1>
        </Link>
        <Link to="/personal" className="personal side">
          <i className="fa-solid fa-user"></i>
          <h1>Personal </h1>
        </Link>
      </div>

      <div className="sidebar_bottom">
        <Link to="/settings" className="settings side">
          <i className="fa-solid fa-gear"></i> <h1>Settings</h1>
        </Link>
      </div>

      {newNote && (
        <>
          <div className="black_screen">
            <NewNote />
          </div>
        </>
      )}

      {showSearch && (
        <div className="black_screen">
           <Search />
        </div>
       
      )}

      


    </div>
  );
}
