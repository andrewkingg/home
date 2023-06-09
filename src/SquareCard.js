import React from 'react';
import './Design.css';

const SquareCard = (props) => {
        return (
          <div className = 'squareCard'>
           <img onClick = {e => props.handleOpen(props.img)} className = 'image' src = {props.img} style={{objectFit:'cover'}} alt = ''></img>
          </div>
        );
}

export default SquareCard;
