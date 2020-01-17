import React from 'react';
import './Design.css';

const DesignCard = (props) => {
        return (
          <div className = 'designCard'>
           <img className = 'image' src = {props.img} alt = ''></img>
          </div>
        );
}

export default DesignCard;
