import { useState } from 'react'
import Register from './assets/pages/register/register.jsx'
import Login from './assets/pages/login/login.jsx'
import Dashboard from './assets/pages/dashboard/dashboard.jsx'
import SideBar from './assets/components/sidebar.jsx'
import NewNote from './assets/components/newNote.jsx'
import SearchNote from './assets/components/searchNote.jsx'
import Data from './assets/components/data.jsx'
import Notes from './assets/pages/dashboard/notes.jsx'
import Test from './test.jsx'
import Favourites from './assets/components/favourites.jsx'


import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Dashboard />} />
      <Route path='/register' element={<Register/>}/>
      <Route path='login' element={<Login />} />
      <Route path='/sidebar' element={<SideBar/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/newnote' element={<NewNote/>} />
      <Route path='/searchnote' element={<SearchNote/>} />
      <Route path='/data' element={<Data />} />
      <Route path='/notes' element={<Notes />} />
      <Route path='/test' element={<Test />} />
      <Route path='/favourites' element={<Favourites />} />
      

    </Routes>
    

    <Link to='signin'/>
    
    </BrowserRouter>
      
    </>
  )
}

export default App




App.js
  