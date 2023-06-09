import React from 'react';
import './App.css';
import AboutDesc from './AboutDesc'
import AboutPhoto from './AboutPhoto';

class AboutMe extends React.Component {
    render() {
        return (
            <div className='container pt-4'>
              <div className='row m-0'>
                <div className='col-sm-12 col-md-8 p-0'>
                    <AboutDesc/>
                </div>
                <div className='col-sm-12 col-md-4'>
                    <AboutPhoto/>
                </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;
