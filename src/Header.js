import React from 'react';
import './Header.css';
import Navbar from './Navbar.js'

class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">

        <Navbar />
      </div>

    );
  }
}

export default Header;
