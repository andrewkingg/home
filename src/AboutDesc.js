import React from 'react';
import './App.css';

class AboutDesc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: "Welcome! My name is Andrew King and I am a 21 year old recent graduate from the University of Virginia. I majored in Computer Science under the Bachelor of Arts program and began working as a full-time Software Engineer for Parsons Corporation. I started programming as a creative outlet when I was teenager, making various mini-games on Roblox.com. When my games got more popular I began to see what a signifigant impact a simple application could have on the lives of its users. As I continued to develop my projects, I also saw the development of something greater. During that time I witnessed the growth of a community. I saw artistic expression awakened, and memorable experiences made. It was a fun time for both my players and me. Even today, users still message me saying that my games were a part of their childhood, and to have that much impact on someone else's life, I cannot even begin to fathom. I never expected a simple game to have such a positive change in a stranger's life, and even my own. Thanks to that experience, I saw front row the potential that programming and creativity could bring to this world, and I knew I wanted to continue being a part of that. Now that I have graduated, I am aiming to develop innovative and impactful applications throughout my career. Hopefully there will be room for creativity as well!"
        }
    }


    render() {
        return (
            <div className="experience" style ={{height: '400px'}}>
                <h2 className="experienceTitle title" style = {{paddingLeft: '15px'}}>About Me</h2>
               <p style = {{marginLeft: '15px', marginRight: '15px', fontSize: '16px', textIndent: '50px'}}>{this.state.desc}</p>
            </div>
        );
    }
}

export default AboutDesc;
