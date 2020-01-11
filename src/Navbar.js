import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
        <div className="navbarHeader"> 
          <Link to = "/home" className = 'navText' style ={{color: "rgb(68, 68, 68)"}}> Home </Link>
          <Link to = "/about" className = 'navText' style ={{color: "rgb(68, 68, 68)"}}> About </Link>
        </div>
    );
  }
}

export default Header;
