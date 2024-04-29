import React from 'react';
import './Components/styles.css';
import Navbar from './Components/Navbar';
import AboutUs from './Pages/About';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './Components/Layout';
function App() {
  const handleBookClick = (book) => {
    // Navigate to a new page with the book details
    console.log(`Book details: ${book.title} by ${book.author}`); 
  };
  return (
    <>
  <Router>
   <Navbar/>
  <Routes>

          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
        
      </Routes>
  </Router>
       
    </>
  );
  
}

export default App;







