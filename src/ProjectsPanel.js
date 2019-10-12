import React from 'react';
import './App.css';
import Slideshow from './Slideshow'
class ProjectsPanel extends React.Component {
  render() {
    return (
        
      <div className="experience" style = {{height: '360px', position: 'relative'}}>
        <h2 className="experienceTitle title">Projects</h2>
          <Slideshow/>
      </div>
    );
  }
}

export default ProjectsPanel;
