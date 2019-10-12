import React from 'react';
import './App.css';
import LinksRow from './LinksRow.js'
import { IoLogoFacebook, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { TiDocumentText } from 'react-icons/ti'

class LinksPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/profile.php?id=100000910629657',
          icon: IoLogoFacebook,
          color: 'rgb(0, 223, 205)'
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/andrew-king-500281102/',
          icon: IoLogoLinkedin,
          color: 'rgb(255, 198, 43)'
        },
        {
          name: 'GitHub',
          url: 'https://github.com/andrewkingg',
          icon: IoLogoGithub,
          color: 'rgb(255, 57, 116)'
        },
        {
          name: 'Resume',
          url: 'https://docs.google.com/document/d/1vCVIWRXv_UDFpFKbemy64sHkosXHz-cfFlrK7s63ULc/edit?usp=sharing',
          icon: TiDocumentText,
          color: 'rgb(145, 145, 145)'
        },
      ]
    }
  }
  render() {
    return (

      <div className="experience" style={{ height: '245px' }}>
        <h2 className = 'experienceTitle title'>Links</h2>
        <div className='linksColumn'>
          {this.state.links.map(obj => (
            <LinksRow obj={obj} />
          ))}
        </div>
      </div>
    );
  }
}

export default LinksPanel;
