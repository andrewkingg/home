import React from 'react';
import './App.css';
import TopModel from './Assets/TopModel.jpg'
class SlideshowCard extends React.Component {
    render() {
        return (

            <div className = 'slideshowCard'>
               <div className = 'slideshowCardImageHolder'>
                    <a className = 'center' href="https://www.roblox.com/games/162344480/Top-Roblox-Runway-Model-V-3-2" target="_blank" rel="noopener noreferrer">
                    <img className = 'imageFit' src={TopModel} alt =''></img>
                    </a>
               </div>
               <div className = 'slideshowCardText'>
                   <div className = 'whiteText'>
                    <p style = {{marginBottom: '0px', fontWeight: '600', fontSize: '16px'}}>Roblox Top Model</p>
                    <p style = {{marginTop: '0px', fontSize: '14px'}}>Category: Game</p>
                    <p style = {{fontSize: '14px'}}>Developed using: LUA, Roblox Studio</p>
                    <p style = {{fontSize: '14px'}}>A speed based fashion mini-game I 
                    created in the Summer of 2015. This was my one of my first introductions to coding and it inspired
                    me to learn how to create different apps.</p>
                    </div>
               </div>
             
            </div>
        );
    }
}

export default SlideshowCard;
