import React from 'react';
import './App.css';
import Navbar from './Navbar.js'
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="headerBanner">
          <div style={{ height: '60%', width: '90%', paddingLeft: '30px', paddingBottom: '20px' }}>
            <span> "If you </span>
            <span className='pink'>work hard</span>
            <span> enough, and use your mind and </span>
            <span className='yellow'>imagination</span>
            <span>, you can shape the</span>
            <span className='green'> world</span>
            <span> to your desires"</span>
          </div>
          <p style={{ position: 'absolute', bottom: '0', right: '0', marginRight: '15px' }}>-Malcolm Gladwell</p>
        </div>
        <Navbar />
      </div>

    );
  }
}

export default Header;
