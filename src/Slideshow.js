import React from "react";
import { Gallery } from "react-gesture-gallery";
import SlideshowCard from './SlideshowCard'
import TopModel from './Assets/TopModel.jpg'
import PokeTyper from './Assets/PokeTyper.jpg'
function Slideshow() {
  const [index, setIndex] = React.useState(0);

  const images = [
    {
      link: "https://cocky-kare-21e56f.netlify.com/",
      thumbnail: PokeTyper,
      title: "Poke-Typer",
      category: "Utility (Game)",
      technology: "React, Typescript",
      description: "An app used to quickly find the type resistances of a Pokemon! I created this app to practice Typescript and Fetch requests (from PokeApi). I had this idea while playing Pokemon Shield.",
    },
    {
      link: "https://www.roblox.com/games/162344480/Top-Roblox-Runway-Model-V-3-2",
      thumbnail: TopModel,
      title: "Roblox Top Model",
      category: "Game",
      technology: "LUA, Roblox Studio",
      description: "A speed based fashion mini-game I created in the Summer of 2015. This was my one of my first introductions to coding and it inspired me to learn how to create different apps.",
    }, 
  ];

  return (
    <div style={{ width: "700px", height: "300px"}}>
      <Gallery
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {images.map(project => (
          <SlideshowCard project = {project}/>
        ))}
      </Gallery>
    </div>
  );
}

export default Slideshow;
