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
    const newNavOpen = !isNavOpen;
    setNavOpen(newNavOpen);

    if (newNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const handleNavLinkClick = () => {
    setNavOpen(false);
    document.body.style.overflow = ''; // Reset the overflow
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
        document.body.style.overflow = '';
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
                  <Link to="/collaborations"><p>Industry Collaborations</p></Link>
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
          <Link to="/" className="left overlay-left">
            <img src={Logo} alt="Logo for the NUS Building Robotics Laboratory" className='logo' />
          </Link>
          <button className="close-button" onClick={toggleNav}>&times;</button>
          <div className="nav-overlay-item" onClick={toggleResearchSublinks}>Research<i className="arrownav downnav"></i></div>
          {showResearchSublinks && (
            <div className="nav-overlay-sublinks">
              <Link to="/research" onClick={handleNavLinkClick}>Themes</Link>
              <Link to="/collaborations" onClick={handleNavLinkClick}>Collaborations</Link>
              <Link to="/comfortgpt" onClick={handleNavLinkClick}>ComfortGPT</Link>
              <Link to="/otst" onClick={handleNavLinkClick}>Optimal Temperature Setpoint Tool</Link>
              <a href="https://github.com/Building-Robotics-Lab">GitHub</a>
            </div>
          )}
          <Link to="/team" onClick={handleNavLinkClick}>Our Team</Link>
          <Link to="/news" onClick={handleNavLinkClick}>News</Link>
          <Link to="/publications" onClick={handleNavLinkClick}>Publications</Link>
          <Link to="/join" onClick={handleNavLinkClick}>Join the Lab</Link>
          <p className='navbar_buttons'>
            <a className="bi-envelope" id="navbar_button" onClick={handleNavLinkClick} href="mailto:ghahramani@nus.edu.sg"></a>
            <a className="bi-linkedin" id="navbar_button" onClick={handleNavLinkClick} href="https://www.linkedin.com/company/building-robotics-lab/" target="_blank"></a>
            <a className="bi-github" id="navbar_button" href="https://github.com/Building-Robotics-Lab" target="_blank"></a>
          </p>
        </div>
      )}
    </>
  );
}

export default NavBar;
