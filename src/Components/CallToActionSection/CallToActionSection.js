import React, {useState} from 'react';
import '../../App.css';
import SectionHeader from '../General/SectionHeader'

const CallToActionSection = () => {

    return (
      <div className="section" style = {{marginTop:'50px'}}>
      <div className="container d-flex flex-column align-items-center justify-content-center pb-5" >

       <h2 data-scroll className="mb-3 text-center" style = {{fontWeight: '300', marginTop: '20px'}}> {"Interested in Chatting with Me?"} </h2>

      <a className='mt-4 mb-5' href={'https://www.linkedin.com/in/andrew-king-500281102/'} target="_blank" rel="noopener noreferrer" > 
        <button data-scroll className="button">Connect on LinkedIn </button>
      </a>
       
      </div>
    </div>
    );

}

export default CallToActionSection;
