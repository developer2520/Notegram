import React,{useState} from 'react';
import Sidebar from '../../components/sidebar';
import Notes from '../dashboard/notes.jsx';
import RealNotes from './realnotes.jsx'
import './dashboard.css'

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (query) => {
    setSearchQuery(query);}
  return (
    <div className='mainParent'>
      <Sidebar onSearchInputChange={handleSearchInputChange} />
      <RealNotes  searchQuery={searchQuery} />
      
    </div>
  );

}