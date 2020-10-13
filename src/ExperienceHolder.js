import React from 'react';
import './Experience.css';

const ExperiencePanel = ({jobDetails}) => {

    return (

      <div className="experienceHolder">
         <img className='experienceIcon' src={jobDetails.image} alt=''></img>
        <div className="descHolder">
          <div className="descTitle">
            <p style = {{fontWeight: '600', fontSize : '14px', marginRight: "15px"}}>{jobDetails.name}</p>
            <p className = "grayText" style = {{paddingRight: '10px', fontSize: '12px'}}>{jobDetails.time}</p>
          </div>
          <p className = 'descBody'>{jobDetails.title}</p>
          <div style = {{ width: '100%', position: 'absolute', bottom: '0'}}>
          {jobDetails.skills.map((skill,i) => ((i===jobDetails.skills.length-1)?
          <p className = "descFooter">{skill} </p>: 
          <span style={{marginRight:'2.5px', fontSize:'10px'}}><p className = "descFooter">{skill}</p> • </span>
          ))}
          </div>
        </div>

       
      </div>
    );
}

export default ExperiencePanel;
