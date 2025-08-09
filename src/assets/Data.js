import Tinder from './TinderThumbnail.png'
import MealDeal from './MealDealThumbail.png'
import Allchat from './AllChatThumbnail.png'
import MeYou from './MeYouThumbnail.png'
import TeeUp from './teeupfortomorrow.png'


import htmllogo from './HTML-logo.png'
import csslogo from './CSS-logo.png'
import javascriptlogo from './JavaScript-logo.png'
import reactlogo from './React-icon.svg.png'
import vuelogo from './vue-logo.png'
import dockerlogo from './docker-logo.png'
import postgres from './postgresql.png'
import awslogo from './awslogo.png'
import parsons from './parsons2.png'
import roblox from './roblox2.png'

import mantech from './mantech.png'
import generalAssembly from './general_assembly.png'
import uva from './uva.png'
import blueridge from './BlueRidgeLogo.jpeg'
import Deloitte from './Deloitte-logo.jpg'


 export const workExperience = [
    {
      name: "Deloitte",
      time: "Since July 2023",
      title: "Senior Software Developer",
      skills: ["AI", "Frontend", "Backend", "AWS", "Docker"],
      image: Deloitte,
      }, 
    {
      name: "Blue Ridge Dynamics",
      time: "2021-2023",
      title: "Frontend Software Developer",
      skills: ["Vue 3", "React JS", "Javascript", "HTML", "CSS"],
      image: blueridge,
      }, 
    {
    name: "Mantech International",
    time: "2020-2021",
    title: "UX Designer + Developer",
    skills: ["ASP.NET Core", "HTML/CSS", "Web Design","Wireframing"],
    image: mantech,
    }, 
    {
    name: "Parsons Corporation", 
    time: "2019-2020",
    title: "Frontend Software Developer",
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

];

export const education = [
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
}]

export const skills = [{name: 'React JS', img: reactlogo}, {name: 'Vue', img: vuelogo}, {name: 'HTML', img: htmllogo}, {name: 'CSS', img: csslogo}, {name: 'Javascript', img: javascriptlogo}, {name: 'Docker', img: dockerlogo}, {name: 'PostgreSQL', img: postgres}, {name: 'AWS', img: awslogo}]

export const projects = [
   {
    name: "Tee Up For Tomorrow",
    time: "May 2025",
    title: "Designed and built a website for a local non-profit golf organization. Made the website using Webflow.",
    image: TeeUp,
    url: "https://teeupfortomorrow.webflow.io/",
    linkText: 'Visit Website',
    type: ['Web', 'Design']
    }, 
  {
    name: "MeYou Virtual Dating",
    time: "Feb 2021",
    title: "Team project for the 2021 DubTech's Valentines Hackathon. Web App designed to help long distance couples stay connected.",
    image: MeYou,
    url: "https://docs.google.com/presentation/d/1MaQRcU8wLwbsYqWrphY-z9ptlfewIdmaH4Z2v8n7Q9A/edit#slide=id.gd9c453428_0_16",
    linkText: 'View Casestudy',
    type: ['Design']

    }, 
  {
  name: "MealDeal Mobile App",
  time: "Spring 2020",
  title: "An app designed to help users find cheaper grocery-based meal options while cutting the time to put it together",
  image: MealDeal,
  url: "https://docs.google.com/presentation/d/1W11j_CqPqNd_8KSIiBaPbY7_fEI1_8OGAJazVLFWO8s/edit?usp=sharing",
  linkText: 'View Casestudy',
  type: ['Design']

  }, 
  {
  name: "AllChat Mobile App", 
  time: "Feb 2020",
  title: "Mobile application designed to help users keep track of all their messages from many third party messaging applications",
  image: Allchat,
  url:  "https://docs.google.com/presentation/d/11yU5ObYSRAhzydKTSvyrzEBTrc4tlqyLim0A5DuKCbQ/edit?usp=sharing",
  linkText: 'View Project'
},
{
  name: "Redesigning Tinder", 
  time: "Jan 2020",
  title: "An analysis of how Tinder could be more user friendly, efficient, and help users find their perfect match",
  image: Tinder,
  url: "https://docs.google.com/presentation/d/1pUU2kL0FKDxLH_Z-3Lfz0o1QCGLdesDhoMxbWb5Tk6I/edit?usp=sharing"
},]