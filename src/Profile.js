import React from 'react';
import './App.css';
import profilepic from './Assets/profile-pic.png'

class Profile extends React.Component {
  render() {
    return (

      <div className="experience">
        <div className = 'pfp'>
        <img style = {{height : '100%', width: '100%'}} src={profilepic} alt=''></img>
        </div>
        <div className='pfpText'>
          <p style={{ borderStyle: 'none', fontSize: '17px', fontWeight: '500' }}>Andrew King</p>
          <p style={{ paddingLeft: '15px', paddingRight: '15px', fontSize: '15px' }}>
            B.A. Computer Science - University of Virginia - May 2019</p>
          <p style={{ paddingLeft: '15px', paddingRight: '15px', margin: '0', fontSize: '15px' }} >
            Active Security Clearance:</p>
          <p style={{ margin: '0', fontSize: '15px' }} >
            Top Secret</p>
        </div>

      </div>
    );
  }
}

export default Profile;
