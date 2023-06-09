import React, { useState } from 'react';
import '../../App.css';
import './CodingSection.css';
import SectionHeader from '../General/SectionHeader'
import TextContentLink from '../General/TextContentLink';
import TopModel from '../../Assets/TopModel.jpg'
import PokeTyper from '../../Assets/PokeTyper.jpg'

const CodingSection = () => {

  const SideImageAndText = ({ project }) => {
    const { name, time, desc, orientation, thumbnail, linkText, url } = project || "null";
    console.log("SLDKLSD", linkText)
    return ((orientation === 'left') ?
      <div className="row m-0" style={{ height: '335px', display: 'flex', marginBottom: '100px' }}>

        <div  className="col-sm-12 col-md-6" style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
          <div className="py-4" style={{ width: '65%' }}>
            <TextContentLink details={{
              name: name, time: time, title: desc, linkText, url,
              margin: '25px'
            }}></TextContentLink>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <img data-scroll style={{
            width: '96%', height: '100%', boxShadow: 'var(--shadow)',
            border: '0.5px solid var(--light-gray)', objectFit: 'cover'
          }} src={thumbnail} alt=''></img>
        </div>

      </div> :


      <div className="row coding-card mx-0" style={{ height: '335px', display: 'flex' }}>
        <div className="col-sm-12 col-md-6">
          <img data-scroll style={{
            width: '96%', height: '100%', boxShadow: 'var(--shadow)',
            border: '0.5px solid var(--light-gray)', objectFit: 'cover'
          }} src={thumbnail} alt=''></img>
        </div>
        <div className="col-sm-12 col-md-6" style={{backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
          <div className="py-4" style={{ width: '65%' }}>
            <TextContentLink details={{
              name: name, time: time, title: desc, linkText, url,
              margin: '25px'
            }}></TextContentLink>
          </div>
        </div>

      </div>)
  }

  const projects = [
    {
      name: "PokeTyper",
      time: "Dec 2019",
      desc: "An app designed to quickly find the type resistances for specfic Pokemon! I created this app to practice Typescript and Fetch requests (from PokeApi.co). I had this idea while playing Pokemon Shield and wanted to create a utility tool.",
      url: "https://cocky-kare-21e56f.netlify.com/",
      linkText: "Visit Webapp",
      thumbnail: PokeTyper,
      orientation: "right"
    },
    {
      name: "Roblox Top Model",
      time: "2015-2019",
      desc: "A speed based fashion mini-game I created in the Summer of 2015 and maintained until 2019. This was implemented using LUA and Roblox Studio. In addition, it was also my first experience with programming and application design!",
      url: "https://www.roblox.com/games/162344480/Top-Roblox-Runway-Model-V-3-2",
      linkText: "Visit Game",
      thumbnail: TopModel,
      orientation: "left"
    }

  ]
  return (
    <div className="section">
      <div className="container d-flex flex-column">

        <SectionHeader title={"Coding Projects"} padTop={"10px"} padBot={"35px"} />
        <SideImageAndText project={projects[0]} />
        <SideImageAndText project={projects[1]} />

      </div>
    </div>
  );

}

export default CodingSection;
