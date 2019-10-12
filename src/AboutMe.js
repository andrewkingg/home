import React from 'react';
import './App.css';
import AboutDesc from './AboutDesc'
import AboutPhoto from './AboutPhoto';

class AboutMe extends React.Component {
    render() {
        return (
            <div className='Container'>
                <div className="Panel2">
                    <AboutDesc/>
                </div>
                <div className="Panel1">
                    <AboutPhoto/>
                </div>
            </div>
        );
    }
}

export default AboutMe;
