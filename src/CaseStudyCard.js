import React from 'react';
import './Design.css';

const CaseStudyCard = (props) => {
        return (
          <div className = 'designCard' >
              <a className = 'center' style = {{width: "100%", borderStyle: "none"}} 
              href={props.link} target="_blank" rel="noopener noreferrer">
           <img className = 'image' src = {props.img} alt = ''></img>
           </a>
          </div>
        );
}

export default CaseStudyCard;
