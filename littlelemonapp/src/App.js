import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from "./page_layouts/Nav"
import Footer from "./page_layouts/Footer"
import Homepage from "./pages/Homepage"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/booking"/>
      <Route path="/booking-confirmation"/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
