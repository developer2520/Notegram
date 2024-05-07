import React from 'react';
import Sidebar from '../../components/sidebar';
import Notes from '../dashboard/notes.jsx';
import RealNotes from './realnotes.jsx'
import './dashboard.css'

export default function Dashboard() {
  return (
    <div className='mainParent'>
      <Sidebar />
      <RealNotes />
      
    </div>
  );
}
