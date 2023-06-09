import React from 'react';
import './DesignCard.css';
import TextContentLink from '../General/TextContentLink';

const DesignCard = ({jobDetails}) => {

    return (
      <div class="col-sm-12 col-md-4 mb-3">
        <a  href={jobDetails.url} target="_blank" >
         <img className='designIcon' style ={{objectFit: 'cover'}} src={jobDetails.image} alt=''></img>
         </a>
        <TextContentLink details={jobDetails}/>
      </div>
    );
}

export default DesignCard;
