import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from './Website Data/MicrosoftTeams-image.png';

function NavBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false); // State to control the nav overlay
  const timeoutRef = useRef(null);
  const [showResearchSublinks, setShowResearchSublinks] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleNav = () => {
    setNavOpen(!isNavOpen);

    if (!isNavOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  const toggleResearchSublinks = () => {
    setShowResearchSublinks(!showResearchSublinks);
  };


  // Ensure that scrolling is re-enabled when the component unmounts
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 850 && isNavOpen) {
        setNavOpen(false);
        document.body.classList.remove('no-scroll');
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.classList.remove('no-scroll');
    };
  }, [isNavOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 75);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="left">
            <img src={Logo} alt="Logo for the NUS Building Robotics Laboratory" className='logo' />
            <p>Building Robotics Laboratory</p>
          </Link>
          <div className="right">
            <button className="dropdown-toggle" onClick={toggleNav}>
              <span className="hamburger-icon"></span>
              
            </button>
            <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <p onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                <Link to="/research"><p><span className='dropdown_research'>Research</span></p></Link>
                <i className="arrow down"></i>
              </p>
              {(isDropdownOpen) && (
                <div className="dropdown-content">
                  <Link to="/research"><p>Themes</p></Link>
                  <Link to="/collaborations"><p>Collaborations</p></Link>
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
          </div>
        </div>
      </nav>
      {isNavOpen && (
        <div className="nav-overlay">
          <button className="close-button" onClick={toggleNav}>&times;</button>
          {/* Make Research clickable but not a link */}
          <div className="nav-overlay-item" onClick={toggleResearchSublinks}>
            Research<i className="arrow down"></i>
          </div>
          {showResearchSublinks && (
            <div className="nav-overlay-sublinks">
              <Link to="/research">Themes</Link>
              <Link to="/collaborations">Collaborations</Link>
              <Link to="/comfortgpt">ComfortGPT</Link>
              <Link to="/otst">Optimal Temperature Setpoint Tool</Link>
              <a href="https://github.com/Building-Robotics-Lab">GitHub</a>
            </div>
          )}
          {/* Other main links */}
          <Link to="/team">Our Team</Link>
          <Link to="/news">News</Link>
          <Link to="/publications">Publications</Link>
          <Link to="/join">Join the Lab</Link>
        </div>
      )}
    </>
  );
}

export default NavBar;
