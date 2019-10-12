import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
        <div className="navbarHeader"> 
          <Link to = "/home" className = 'navText'> Home </Link>
          <Link to = "/about" className = 'navText'> About </Link>
        </div>
    );
  }
}

export default Header;
