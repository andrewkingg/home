import React from 'react';
import './App.css';
import HeroSection from './Components/HeroSection/heroSection'
import WorkExperience from './Components/WorkExperience/WorkExperience'
import DesignSection from './Components/DesignSection/DesignSection';
import CodingSection from './Components/CodingSection/CodingSection';
import CallToActionSection from './Components/CallToActionSection/CallToActionSection';
class Home extends React.Component {
  render() {
    return (
      <div>          
        <HeroSection/>
        <DesignSection/>
        <CodingSection/>
        <WorkExperience/>
        <CallToActionSection/>
      </div>
    );
  }
}

export default Home;
