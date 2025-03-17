import React from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/main'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
      <Main />
      </Router>
    </div>
  )
} 

export default App
