import React from 'react';
import './App.css';
import AboutDesc from './AboutDesc'
import AboutPhoto from './AboutPhoto';

class AboutMe extends React.Component {
    render() {
        return (
            <div className='Container' style = {{justifyContent: 'space-between', paddingTop: '50px'}}>
                <div style = {{width: '65%'}}>
                    <AboutDesc/>
                </div>
                <div style = {{width: '25%'}}>
                    <AboutPhoto/>
                </div>
            </div>
        );
    }
}

export default AboutMe;
