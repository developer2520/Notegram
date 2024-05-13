import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore  } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import NotesReducer from './assets/features/Notes.js'
import newnoteReducer from './assets/features/newnote.js'
import { newnote } from './assets/features/newnote.js'
import showSettingsReducer from './assets/features/showSettings.js'
import {showSettings} from  './assets/features/showSettings.js'

const store = configureStore({
  reducer: {
    notes: NotesReducer,
    newnote: newnoteReducer,
    showSettings: showSettingsReducer

  }
})





ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
   <Provider store={store}>
    <App />
    </Provider> 
    
  </React.StrictMode>,
)
