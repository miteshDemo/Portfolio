import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import About from './Components/About';
import Experience from './Components/Experience';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/experience" element={<Experience />} />
        <Route path="/" element={<Main />} />
        <Route path='/about' element = {<About />} />
      </Routes>
    </Router>
  );
};

export default App;
