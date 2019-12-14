import React from 'react';
import './App.css';

class SlideshowCard extends React.Component {
    render() {
        return (

            <div className = 'slideshowCard'>
               <div className = 'slideshowCardImageHolder'>
                    <a className = 'center' href={this.props.project.link} target="_blank" rel="noopener noreferrer">
                    <img className = 'imageFit' src={this.props.project.thumbnail} alt =''></img>
                    </a>
               </div>
               <div className = 'slideshowCardText'>
                   <div className = 'whiteText'>
                    <p style = {{marginBottom: '0px', fontWeight: '600', fontSize: '16px'}}>{this.props.project.title}</p>
                    <p style = {{marginTop: '0px', fontSize: '14px'}}>Category: {this.props.project.category}</p>
                    <p style = {{fontSize: '14px'}}>Developed using: {this.props.project.technology}</p>
                    <p style = {{fontSize: '14px'}}>{this.props.project.description}</p>
                    </div>
               </div>
             
            </div>
        );
    }
}

export default SlideshowCard;
