import React from 'react';
import './Design.css';
import DesignCard from './DesignCard'
import Seolhyun from './Assets/MinimalGray.png'
import DoSomething from './Assets/DoSomething-FirstScreen.png'
import Gfriend from './Assets/Gfriend-Home.png'
class Designs extends React.Component {
    state = {
      'designs' : [{'img': Gfriend}, {'img': DoSomething}, {'img': Seolhyun}, ]
    }
    render() {
        return (
          <div style = {{textAlign: 'center'}}>
            <p>A compilation of various designs that I mocked up with Adobe Xd.</p>
            <div className='DesignContainer'>
               {this.state.designs.map(design => (
                 <DesignCard key = {design.img} img = {design.img} ></DesignCard>
               ))}
            </div>
            </div>
        );
    }
}

export default Designs;
