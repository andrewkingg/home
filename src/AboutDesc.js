import React from 'react';
import './App.css';

const DescriptionBox = ({title,desc}) => {
 return(
  <div className="experience" style ={{height: ''}}>
  <h2 className="experienceTitle">{title}</h2>
  <div style = {{backgroundColor: 'var(--accent-color)', width: "80px", height: "5px",  marginBottom: "10px"}}></div>
 <p className="bodyText">{desc}</p>
</div>
 )
}

class AboutDesc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: "Welcome! My name is Andrew King and I am a Web Developer and Designer. I graduated from the University of Virginia in May 2019 with a Bachelors of Arts in Computer Science. I started programming as a creative outlet when I was teenager, making various mini-games on Roblox.com. When my games got more popular I was able to see what a positive impact web applications could have on the lives of its users, and how much design impacted that experience. Thanks to those projects, I saw what potential programming and creativity could bring to its audience, and I knew I wanted to continue being a part of that. As a result I decided to pursuit a career in web design and web development and have since worked in both UX and Front End Dev roles.",
            extra: "I'm a big fan of doing anything creative! In my free time I really enjoy art, especially drawing. I also like to design website layouts, clothes, and edit videos. In college I was on a KPOP dance team and lived in the language exchange dorms, both of which were super enjoyable experiences."
        }
    }


    render() {
        return (
          <div>
            <DescriptionBox title = "About Me" desc={this.state.desc}/>
            <DescriptionBox title = "Interests" desc={this.state.extra}/>
            </div>
        );
    }
}

export default AboutDesc;
