import React, { useEffect, useRef, useState } from "react";
import "./newnote.css";
import { useDispatch } from "react-redux";
import { addNote } from "../features/Notes.js";
import { format } from "date-fns";
import { current } from "@reduxjs/toolkit";
import { close } from "../features/newnote.js";

// import { format }

export default function NewNote() {
  const dispatch = useDispatch();
  const noteModal = useRef();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  const formatTime = () => {
    const currentTime = Date();
    const formattedTime = format(currentTime, "HH:mm");
    setTime(formattedTime);
  };
  const formatDate = () => {
    const currentDate = Date();
    const formattedDate = format(currentDate, "dd-MM-yyyy");

    setDate(formattedDate);
  };

  useState(() => {
    formatDate();
  }, []);

  useState(() => {
    formatTime();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addNote({
        id: crypto.randomUUID(),
        title,
        description,
        date,
        category,
        time,
      })
    );
    dispatch(close());
  };

  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      if (noteModal.current && !noteModal.current.contains(event.target)) {
        dispatch(close());
      }
    };
    document.addEventListener("mousedown", handleClickOutsideModal);
    return;
  }, []);

  return (
    <div ref={noteModal} className="note">
      <div className="topofthenewnote">
        <h1>Write new Note</h1>
        <button onClick={() => dispatch(close())} className="x-button-close">
          <i className="fa-solid fa-circle-xmark"></i>
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="text">
          <div className="title">
            <input
              className="titleInput"
              type="text"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              required
              placeholder="write title"
            />
          </div>
          <div className="main_text">
            <textarea
              className="textInput"
              required
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              placeholder="Write the main text"
            />
          </div>
        </div>
        <div className="categorySelector">
          <label htmlFor="favourite">
            <input
              type="radio"
              id="favourite"
              name="category"
              checked={category === "favourite"}
              onChange={() => setCategory("favourite")}
            />
            <i className="fa-solid fa-heart"></i> Favourite
          </label>

          <label htmlFor="work">
            <input
              type="radio"
              id="work"
              name="category"
              checked={category === "work"}
              onChange={() => setCategory("work")}
            />
            <i className="fa-solid fa-briefcase"></i> Work
          </label>

          <label htmlFor="study">
            <input
              type="radio"
              id="study"
              name="category"
              checked={category === "study"}
              onChange={() => setCategory("study")}
            />
            <i className="fa-solid fa-school"></i>Study
          </label>

          <label htmlFor="personal">
            <input
              type="radio"
              id="personal"
              name="category"
              checked={category === "personal"}
              onChange={() => setCategory("personal")}
            />
            <i className="fa-solid fa-user"></i>Personal
          </label>
        </div>

        <button className="submitbutton" type="submit">
          Save
        </button>
      </form>
      <p>{error}</p>
    </div>
  );
}
