import React from "react";
import { Gallery } from "react-gesture-gallery";
import SlideshowCard from './SlideshowCard'


function Slideshow() {
  const [index, setIndex] = React.useState(0);

  const images = [
    {
      src:
        "https://images.unsplash.com/photo-1557958114-3d2440207108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
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
        {images.map(img => (
          <SlideshowCard />
        ))}
      </Gallery>
    </div>
  );
}

export default Slideshow;
