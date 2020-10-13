import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
import { FaLaptopCode } from 'react-icons/fa'

class Header extends React.Component {
  render() {
    return (
      <div className="navbarHeader">
        <div className="space-between" style = {{width: '1100px'}}>
          <Link to="/" className='navText' >
            <div className = 'space-between' style = {{width: '120px'}}>
              <FaLaptopCode className="laptopIcon" />
              <p style = {{paddingLeft: '0px', marginLeft: '0px'}}>Andrew King </p>
            </div>
          </Link>
          <div className="space-between" style = {{width: '300px'}}>
            <Link to="/" className='navText' > Home </Link>
            <Link to="/about" className='navText' > About </Link>
            <Link to="/designs" className='navText' > Designs </Link>
            <a href={"https://docs.google.com/document/d/1UGsSHjQc2uxM-Psygvig9GexNt0zpHe_XlXYBagqj80/edit?usp=sharing"} target="_blank" rel="noopener noreferrer">
            <p className='navText'> Resume </p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
