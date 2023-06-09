import React, {useState} from 'react';
import '../../App.css';
import './TextContentLink.css'
const TextContentLink = ({details}) => {
    console.log(details);
    return (
      <div style = {{display: "inline-block"}}>

     <div className="d-flex flex-row mt-3 align-items-end">
        <h5 className="mb-0" style = {{marginRight: "10px"}}>{details.name}</h5>
        <p className = "mb-0 grayText" style = {{paddingRight: '10px', fontSize: '12px'}}>{details.time}</p>
      </div>
      <p className = 'grayText' style = {{
      marginTop: details.margin? details.margin : "10px",
      marginBottom: details.margin? details.margin : "10px",
      lineHeight: "180%"
      }}>{details.title}</p>
      <a style = {{display: "inline-block"}} href={details.url} target="_blank" rel="noopener noreferrer">
      <p className = 'blueText' style = {{marginTop: "10px"}}>{details.linkText? details.linkText: 'Learn More'}</p>
      </a> 
    </div>
    );
}

export default TextContentLink;
