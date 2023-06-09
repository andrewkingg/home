import React from 'react';
import '../../Experience.css';
import parsons from '../../Assets/parsons2.png'

const EducationCard = ({ jobDetails }) => {

  return (
    <div className="col-12 col-md-6">
      <div data-scroll className="experienceHolder" style={{ marginBottom: '60px' }}>
        <img className='experienceIcon mr-4' src={jobDetails.image} alt=''></img>
        <div className="descHolder" style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '100%' }}>
            <div className="descTitle">
              <p style={{ fontWeight: '600', fontSize: '14px', marginRight: "15px" }}>{jobDetails.name}</p>
              <p className="grayText" style={{ paddingRight: '10px', fontSize: '12px' }}>{jobDetails.time}</p>
            </div>
            <p className='descBody'>{jobDetails.title}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default EducationCard;
