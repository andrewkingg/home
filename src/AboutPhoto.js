import React from 'react';
import './App.css';
import profilepic from './Assets/aboutphoto2.jpg'

class AboutPhoto extends React.Component {
  render() {
    return (

      <div className="experience" style = {{width: "100%"}}>
        <img style = {{height : '500px', width: '100%', objectFit: 'contain'}} src={profilepic} alt=''></img>
      </div>
    );
  }
}

export default AboutPhoto;
