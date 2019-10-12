import React from 'react';
import './App.css';
import profilepic from './Assets/aboutphoto2.jpg'

class AboutPhoto extends React.Component {
  render() {
    return (

      <div className="experience">
        <div className = 'pfp' style = {{height: '100%'}}>
        <img style = {{height : '100%', width: '100%'}} src={profilepic} alt=''></img>
        </div>
      </div>
    );
  }
}

export default AboutPhoto;
