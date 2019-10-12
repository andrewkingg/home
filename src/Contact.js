import React from 'react';
import './App.css';
import { IoMdMail } from "react-icons/io";

class Contact extends React.Component {
 
  render() {
    return (

      <div className="experience" style={{ height: '95px' }}>
        <h2 className = 'experienceTitle title'>Contact</h2>
        <div className='linksColumn'>
        <div className='linkRow'>
                <IoMdMail style = {{marginLeft: '4px'}} className='linkIcons'/>
                <div style = {{width: '200px', height: '100%', wordWrap: 'break-word'}}>
                        <p style = {{fontSize: '13px', marginTop: '20px', marginLeft: '0px'}}>andrewking22098@gmail.com</p>
                        </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Contact;
