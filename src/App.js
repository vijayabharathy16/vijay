import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Main from './Main';
import About from './About';
import Skills from './Skills';
import Projects from './Project';
import Contact from './Contact';
import Language from './Language';
import Libraries from './Libraries';
import Framework from './Framework';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Main></Main>
        <About></About>
        <Skills></Skills>
         
        <Routes>
          <Route path="/langauage" element={<Language />} />
          <Route path="/libraries" element={<Libraries />} />
          <Route path="/framework" element={<Framework />} />
         
           
        </Routes>
        <Projects></Projects>
        <Contact></Contact>
      </BrowserRouter>

    </>
  )
}

export default App;
