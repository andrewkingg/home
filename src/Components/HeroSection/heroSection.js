import React, { useEffect } from 'react';
import '../../App.css';
import './HeroSection.css';
import LinksPanel from '../../LinksPanel'
import photo from '../../Assets/heroPhotoz.jpg'



const HeroSection = () => {
    return (
      <div className="container p-0">

        <div className="row m-0">
        <div className="position-absolute bg-gray" style={{ height: '465px', zIndex: '-1' }}></div>
          <div class="col-sm-12 col-md-5 ">
            
            <div className="tagline-container w-100 h-100 d-flex align-items-center p-5 p-sm-0">
              <div className="pl-4">
                <p>Hi I'm Andrew,</p>
                <div className="pr-5">
                  <h3 className="pr-5">I work to combine <span style={{ color: 'var(--accent-color)' }}>creativity</span> and <span style={{ color: 'var(--accent-color)' }}>technology</span> to solve real world problems</h3>
                </div>
                <p>Frontend Software Developer • UX Designer</p>
                <LinksPanel />
                <p className='smallText mb-0' style={{ marginTop: '10px' }}>andrewking22098@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='d-none d-sm-flex col-sm-0 col-md-7 d-flex justify-content-center align-items-center' style={{ backgroundColor: 'white', height: '465px', overflow: "hidden" }}>
           
              <img className='bannerImage col-7 p-0' style={{ objectFit: 'cover', height: '85%', minWidth: '250px', zIndex:'100' }} src={photo} alt=''></img>

            <div style={{ backgroundColor: 'var(--accent-color)', width: '450px', height: '273px', position: 'absolute', right: '0', top:'15px'}}></div>


            <div style={{ backgroundColor: 'var(--accent-color)', width: '200px', height: '200px', position: 'absolute', bottom: '10px', left: '15%' }}></div>
          </div>
        </div>
      </div>
    );
  
}

export default HeroSection;
