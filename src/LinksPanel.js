import React from 'react';
import './App.css';
import LinksRow from './LinksRow.js'
import { FaGithubSquare ,FaFacebookSquare, FaLinkedin, FaFileAlt } from "react-icons/fa"

class LinksPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/profile.php?id=100000910629657',
          icon: FaFacebookSquare,
          color: '#4064AC'
        },
        {
          name: 'GitHub',
          url: 'https://github.com/andrewkingg',
          icon: FaGithubSquare,
          color: '#595959'
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/andrew-king-500281102/',
          icon: FaLinkedin,
          color: '#0077B5'
        },
      ]
    }
  }
  render() {
    return (

   
        <div className='linksColumn'>
          {this.state.links.map(obj => (
            <LinksRow key = {obj.name} obj={obj} />
          ))}
        </div>
    );
  }
}

export default LinksPanel;
