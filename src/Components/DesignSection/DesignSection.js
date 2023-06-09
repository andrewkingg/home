import React, {useState} from 'react';
import '../../App.css';
import './DesignSection.css';
import SectionHeader from '../General/SectionHeader'
import DesignCard from './DesignCard'
import {projects} from '../../Data/Projects'
const DesignSection = () => {



    return (
<div className='section'>
      <div className="container d-flex flex-column">

       <SectionHeader title={"Latest Design Projects"} padBot={"20px"}/>

       <div class="row m-0">
          {projects.slice(0,3).map(job => ( 
           <DesignCard jobDetails = {job}/>
          ))}   
       </div>
       
      </div>
      </div>
    );

}

export default DesignSection;
