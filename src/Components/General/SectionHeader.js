import React, {useState} from 'react';
import '../../App.css';

const SectionHeader = ({title, padTop, padBot, center}) => {
    console.log("title ", title)
    return (
  
        <div className={center && "text-center d-flex flex-column align-items-center"} style = {{width:"100%", paddingTop: padTop||"0px", paddingBottom: padBot||"30px"}}>
          <h3>{title}</h3>
          <div style = {{backgroundColor: 'var(--accent-color)', width: "80px", height: "5px",  marginBottom: "22px"}}></div>

        </div>
    );
}

export default SectionHeader;
