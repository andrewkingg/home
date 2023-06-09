import React, { useEffect } from 'react';
import './App.css';
import HeroSection from './Components/HeroSection/heroSection'
import WorkExperience from './Components/WorkExperience/WorkExperience'
import DesignSection from './Components/DesignSection/DesignSection';
import CodingSection from './Components/CodingSection/CodingSection';
import CallToActionSection from './Components/CallToActionSection/CallToActionSection';
import ScrollOut from 'scroll-out'

const Home = () => {
  useEffect(()=>{
    ScrollOut({
      /* options */
    });
  },[])

    return (
      <div class="container-fluid px-0">          
        <HeroSection/>
        <DesignSection/>
        <CodingSection/>
        <WorkExperience/>
        <CallToActionSection/>
      </div>
    );
  
}

export default Home;
