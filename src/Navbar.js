import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
import { FaLaptopCode } from 'react-icons/fa'

class Header extends React.Component {
  render() {
    return (
        <nav className="navbar container navbar-expand-md navbar-light justify-content-between border-bottom">
          <Link to="/home">
           <div className='space-between' style={{ maxWidth: '120px' }}>
                <FaLaptopCode className="laptopIcon" />
                <p className="mb-0 pl-2" style={{marginLeft: '0px' }}>Andrew King </p>
              </div>
              </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" style={{flexGrow:0}} id="navbarNav">
            <ul className="navbar-nav">
             
            <Link  className="nav-link mr-3" to="/home">Home</Link>
              <Link className="nav-link mr-3" to="/about">About</Link>

              
              <Link  className="nav-link mr-3" to="/designs">Designs</Link>

          <div class="d-flex align-items-center mr-0">
              <a href="https://docs.google.com/document/d/1UGsSHjQc2uxM-Psygvig9GexNt0zpHe_XlXYBagqj80/edit?usp=sharing" target="_blank"> <btn type="button" className="btn btn-primary" style={{maxWidth: '100px'}} >Resume</btn></a> 
                </div>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Header;
