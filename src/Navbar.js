import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  // State to control the visibility of dropdown menus

  const about = 'About Us >';
  const services = 'Services >';

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [aboutUsDropdown, setAboutUsDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const toggleAboutUsDropdown = () => {
    setAboutUsDropdown(true);
    setServicesDropdown(false);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdown(true);
    setAboutUsDropdown(false);
  };

  const closeDropdowns = () => {
    setAboutUsDropdown(false);
    setServicesDropdown(false);
  };

  const history = useHistory();
  const handleClick = () => {
    history.push('/appointment');
  }

  return (
    <div className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className={`menu ${isMenuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
        &#9776;
      </div>

      <div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-content">
          <h2 className='menu-content'>TechQilla</h2>
          <p className='menu-content'>Contact Information :-
          37, Sector 2, Noida, Uttar-Pradesh, India</p>
          <p className='menu-content'>+1 (509)-331-5518</p>
          <p className='menu-content'>hello@techqilla.com</p>
        </div>
      </div>

      <h1>TECHQILLA</h1>
      <Link className="navbar-items" to="">
        Home
      </Link>

      {/* "About Us" dropdown */}
      <div
        className={`navbar-items ${aboutUsDropdown ? 'dropdown-open' : ''}`}
        onMouseEnter={toggleAboutUsDropdown}
        onMouseLeave={closeDropdowns}>
        {about}
        {aboutUsDropdown && (
          <div className="submenu">
            <Link to="">Who we are</Link>
            <Link to="">Our Values</Link>
            <Link to="">What we do</Link>
            <Link to="">Our Culture</Link>
          </div>
        )}
      </div>

      {/* "Services" dropdown */}
      <div
        className={`navbar-items ${servicesDropdown ? 'dropdown-open' : ''}`}
        onMouseEnter={toggleServicesDropdown}
        onMouseLeave={closeDropdowns}>
        {services}
        {servicesDropdown && (
          <div className="submenu">
            <Link to="">Digital Marketing</Link>
            <Link to="">Web Design and Development</Link>
            <Link to="">Mobile App Development</Link>
            <Link to="">Graphic & UI/UX Design</Link>
            <Link to="">Virtual Assistnace</Link>
            <Link to="">Content Creation</Link>
            <Link to="">App & Web Maintenance</Link>
          </div>
        )}
      </div>

      <Link className="navbar-items" to="">
        Portfolio
      </Link>
      <Link className="navbar-items" to="">
        Contact Us
      </Link>
      <Link className="navbar-items" to="">
        Career
      </Link>
      <Link className="navbar-items" to="">
        Blog
      </Link>
        <Link className="navbar-items" to="">
        Tech
        </Link>
        <button onClick={handleClick}>Set up an Appointment</button>
        {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
      </div>
  );
};

export default Navbar;