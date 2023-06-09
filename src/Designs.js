import React from 'react';
import './Design.css';
import './App.css';
import SquareCard from './SquareCard'
import DesignCard from './Components/DesignSection/DesignCard'
import Seolhyun from './Assets/KimSeolhyun.png'
import DoSomething from './Assets/DoSomething-FirstScreen.png'
import Gfriend from './Assets/Gfriend-Home.png'
import BrianResume from './Assets/BrianResume.png'
import BugCat from './Assets/BugCat.png'
import Modal from '@material-ui/core/Modal';
import Cookies from './Assets/KokisKookies.png'

import {projects} from './Data/Projects'
import SectionHeader from './Components/General/SectionHeader'
class Designs extends React.Component {
  state = {
    'designs': [{ 'img': Seolhyun }, { 'img': Cookies }, { 'img': Gfriend }, { 'img': BrianResume }, { 'img': BugCat }, { 'img': DoSomething },],
    'open': false,
    'img': "",
   
  }
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  handleOpen = (image) => {
    this.setState({ 'open': true });
    this.setState({ 'img': image });
  }
  handleClose = () => {
    this.setState({ 'open': false });
  }
  render() {
    return (
      <div className="container px-5" style={{flexDirection:'column', paddingTop: '50px'}}>
        <SectionHeader title={"Design Projects"}></SectionHeader>
        <div class="row mb-5">
          {projects.map(job => ( 
           <DesignCard jobDetails = {job}/>
          ))}   
       </div>
        <SectionHeader title={"Additional Mockups"}></SectionHeader>
        <div style={{ textAlign: 'center' }}>
          <div className='DesignContainer'>
            {this.state.designs.map(design => (
              <SquareCard handleOpen={this.handleOpen} key={design.img} img={design.img} ></SquareCard>
            ))}
          </div>
          <Modal className="modalImage" open={this.state.open} onClose={this.handleClose}>
            <img className="image" src={this.state.img} alt=""></img>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Designs;
