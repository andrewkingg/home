import React, {useState} from 'react';
import '../../App.css';
import './WorkExperience.css';
import ExperienceHolder from '../../ExperienceHolder'
import SectionHeader from '../General/SectionHeader'
import EducationCard from './EducationCard'
import parsons from '../../Assets/parsons2.png'
import roblox from '../../Assets/roblox2.png'
import twc from '../../Assets/time-warner-logo.jpg'
import mantech from '../../Assets/mantech.png'
import generalAssembly from '../../Assets/general_assembly.png'
import uva from '../../Assets/uva.png'

const WorkExperience = () => {
  const data = [
    {
    name: "Mantech International",
    time: "Since June 2020",
    title: "User Experience Designer / Developer",
    skills: ["ASP.NET Core", "HTML/CSS", "Web Design","Wireframing"],
    image: mantech,
    }, 
    {
    name: "Parsons Corporation", 
    time: "2019-2020",
    title: "Front End Developer",
    skills: ["React JS","Javascript","Typescript","HTML", "CSS"],
    image: parsons,
  },
  {
    name: "Roblox", 
    time: "2014-2019",
    title: "Independent Game Developer",
    skills: ["LUA Coding","Game Design","Game Development"],
    image: roblox,
  },
  {
    name: "Time Warner Cable", 
    time: "Summer 2015",
    title: "Network Operations Center Intern",
    skills: ["Webmail Troubleshooting", "Network Monitoring"],
    image: twc,
  },

];

const education = [
  {
  name: "University of Virginia",
  time: "2016-2019",
  title: "Bachelor of Arts - Computer Science",
  image: uva,
  }, 
  {
  name: "General Assembly", 
  time: "Spring 2020",
  title: "UX Design Program",
  image: generalAssembly,
},]

    return (
      <div className="section gray-bg container-fluid" style = {{marginTop:'10px'}}>
      <div className="container" style = {{flexDirection: 'column'}}>
         <SectionHeader title={"Work Experience"}/>

        
        <div className="row m-0">
          {data.map(job => ( 
           <ExperienceHolder jobDetails = {job}/>
          ))}   
       </div>

       <SectionHeader title={"Education"} padTop={"30px"}/>

       <div className="cardContainer">
          {education.map(job => ( 
           <EducationCard jobDetails = {job}/>
          ))}   
       </div>
       
      </div>
    </div>
    );

}

export default WorkExperience;
