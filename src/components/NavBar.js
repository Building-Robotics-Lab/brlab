import React, { useState, useRef, useEffect } from 'react';  // Add useRef
import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from './Website Data/MicrosoftTeams-image.png';
import Sun from './Website Data/sun.png';
import Moon from './Website Data/moon.png'
import Button from '@mui/material/Button';

function NavBar() {
  // Add state to manage the dropdown open/close
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null); // To keep track of the timeout

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    // Clear any existing timeout to hide the dropdown
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Show the dropdown
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    // Set a timeout to hide the dropdown after 500 milliseconds
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 75);
  };

  // Day and Night
  const [theme, setTheme] = useState('day');

  const toggleTheme = () => {
    setTheme(theme === 'day' ? 'night' : 'day');
  };

  useEffect(() => {
    document.body.className = `${theme}-mode`;
  }, [theme]);


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="left">
            <img src={Logo} alt="BRLab Logo" className='logo' />
            <p>Building Robotics Laboratory</p>
          </Link>
          <div className="right">
            <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <p onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                <Link to="/research" style={{ color: 'black' }}><p><span>Research</span></p></Link>
                <i className="arrow down"></i>
              </p>
              {(isDropdownOpen) && (
                <div className="dropdown-content">
                  <Link to="/research"><p>Initiatives</p></Link>
                  <Link to="/comfortgpt"><p>ComfortGPT</p></Link>
                  <Link to="/otst"><p>Optimal Temperature Setpoint Tool</p></Link>
                  <Link to="https://github.com/Building-Robotics-Lab"><p>GitHub</p></Link>
                </div>
              )}
            </div>
            <Link to="/team"><p>Our Team</p></Link>
            <Link to="/news"><p>News</p></Link>
            <Link to="/publications"><p>Publications</p></Link>
            <Link to="/join"><p id='JoinButton'>Join the Lab</p></Link>
            <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
              {theme === 'day' ? <img src={Sun} alt="Sun" className='mode' /> : <img src={Moon} alt="Moon" className='mode' />}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
