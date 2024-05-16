import React from 'react'
import Sidebar from './sidebar.jsx'
import RealNotes from '../pages/dashboard/realnotes.jsx'

export default function allnotes() {
  return (
    <div style={{display: "flex"}}>
      <Sidebar />
      <RealNotes />
    </div>
  )
}
