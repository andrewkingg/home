import React from 'react';
import './App.css';
import ExperiencePanel from './ExperiencePanel.js'
import Profile from './Profile.js'
import LinksPanel from './LinksPanel';
import ProjectsPanel from './ProjectsPanel';
import Contact from './Contact.js'
class Home extends React.Component {
    render() {
        return (
            <div className='Container'>
                <div className="Panel1">
                    <Profile />
                    <LinksPanel />
                    <Contact />
                </div>
                <div className="Panel2">
                    <ProjectsPanel />
                    <ExperiencePanel />
                </div>
            </div>
        );
    }
}

export default Home;
