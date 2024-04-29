import React  from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
import Contact from '../Pages/Contact';
import AboutUs from '../Pages/About';

import Home from '../Pages/Home';
import { useAuth0 } from "@auth0/auth0-react";
import './Navbar.css';



const Navbar = () => {
  const { logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const {isAuthenticated ,user } =useAuth0();
  const isHomePage = window.location.pathname === '/';
    // const openNewPage = (url) => {
    //     window.open(url, '_blank', 'width=800,height=600'); // Customize window size and features
    //   };
    const Button = (props) => <button className="btn btn-primary" style={{ backgroundColor: 'rgb(211, 215, 178)', color: 'Black', padding: '5px 10px' }} {...props} />;
return (
    <nav>
      <div className="nav-brand">
        <a href="/">ℝ𝔼𝔸𝔻𝔼𝔸𝕊𝕐</a>
      </div>
      <ul className="nav-menu">
      <nav className={`navbar ${isHomePage ? '/Home' : ''}`}/>
      <li><a href='/'> Home</a></li>
      <li><a href='/About'>About Us</a></li>
      <li><a href='/Contact'>Contact</a></li>

      
        {isAuthenticated && (
          <li> <p> {user.name}
        </p> 
      </li>
        )}
        { isAuthenticated ? (
        <li>
           <Button
            onClick={() => logout({ returnTo: window.location.origin  })}>
      Log Out
    </Button>
     </li>) :(  <li><Button onClick={() => loginWithRedirect()}>Log In</Button></li>)
}
      </ul>
    </nav>
  );
};


export default Navbar;


