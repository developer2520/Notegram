import {React, useState} from 'react'
import Note from './note.jsx'






export default function notes({ }) {

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  const [selectedNote,setSelectedNote] = useState([])

  // const notes = [
  //   {
  //     title: "Meeting with Team",
  //     date: "2024-05-05",
  //     description: "Discuss project progress and upcoming tasks.",
  //     img: "meeting.jpg",
  //     emoji: "😎"
  //   },
  //   {
  //     title: "Grocery Shopping",
  //     date: "2024-05-07",
  //     description: "Buy fruits, vegetables, and milk.",
  //     img: "grocery.jpg",
  //     emoji: "😎"
  //   },
  //   {
  //     title: "Gym Session",
  //     date: "2024-05-09",
  //     description: "Workout for an hour.",
  //     img: "gym.jpg",
  //     emoji: "😒"
  //   },
  //   {
  //     title: "Dinner with Friends",
  //     date: "2024-05-12",
  //     description: "Catch up with old friends over dinner.",
  //     img: "dinner.jpg",
  //     emoji: "😒"
  //   },
  //   {
  //     title: "Movie Night",
  //     date: "2024-05-15",
  //     description: "Watch a new release at the cinema.",
  //     img: "movie.jpg",
  //     emoji: "😒"
  //   },
  //   {
  //     title: "Weekend Hike",
  //     date: "2024-05-18",
  //     description: "Explore the nearby trails and enjoy nature.",
  //     img: "hike.jpg",
  //     emoji: "😒"
  //   },
  //   {
  //     title: "Family BBQ",
  //     date: "2024-05-21",
  //     description: "Grill burgers and hotdogs with family.",
  //     img: "bbq.jpg",
  //     emoji: "😒"
  //   },
  //   {
  //     title: "Read a Book",
  //     date: "2024-05-24",
  //     description: "Spend the evening reading a novel.",
  //     img: "book.jpg",
  //     emoji: "😒"
  //   },
  //   {
  //     title: "Home Cleaning",
  //     date: "2024-05-27",
  //     description: "Tidy up the house and do some laundry.",
  //     img: "cleaning.jpg",
  //     emoji: "😒"
  //   },
  //   {
  //     title: "Birthday Party",
  //     date: "2024-05-30",
  //     description: "Celebrate a friend's birthday with cake and balloons.",
  //     img: "birthday.jpg",
  //     emoji: "😒"
  //   },
  //   {
  //     title: "Volunteer Work",
  //     date: "2024-06-02",
  //     description: "Help out at the local shelter.",
  //     img: "volunteer.jpg",
  //     emoji: "😒"
  //   },
  //   {
  //     title: "Cooking Class",
  //     date: "2024-06-05",
  //     description: "Learn to make a new dish.",
  //     img: "durov.jpg",
  //     emoji: "😒"
  //   }
  // ];
  
  return (
    <>
      {/* {notes.map((note, index) => (
        <div className='noteTitle side' key={index} onClick={() => setSelectedNote(note)}>
          <h1>{note.emoji}</h1>
        <h1>{note.title}</h1>
      </div>
       ))}
    {selectedNote && <Note note={selectedNote} />} */}



    

    </>
      
  )
}
