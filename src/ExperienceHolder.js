import React, { useEffect } from 'react';
import './Experience.css';




const ExperiencePanel = ({jobDetails}) => {
 
    return (

      <div className="col-sm-12 col-md-6">
      <div data-scroll className="experienceHolder">
         <img className='experienceIcon mr-4' src={jobDetails.image} alt=''></img>
        <div className="descHolder">
          <div className="descTitle">
            <p className= "" style = {{fontWeight: '600', fontSize : '14px', marginRight: "10px"}}>{jobDetails.name}</p>
            <p className = "grayText" style = {{paddingRight: '10px', fontSize: '12px'}}>{jobDetails.time}</p>
          </div>
          <p className = 'descBody'>{jobDetails.title}</p>
          <div className= 'mt-2' style = {{ width: '100%'}}>
          {jobDetails.skills.map((skill,i) => ((i===jobDetails.skills.length-1)?
          <p className = "descFooter">{skill} </p>: 
          <span style={{marginRight:'2.5px', fontSize:'10px'}}><p className = "descFooter">{skill}</p> • </span>
          ))}
          </div>
        </div>

        </div>
      </div>
    );
}

export default ExperiencePanel;
