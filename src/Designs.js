import React from 'react';
import './Design.css';
import './App.css';
import DesignCard from './DesignCard'
import CaseStudyCard from './CaseStudyCard'
import Seolhyun from './Assets/KimSeolhyun.png'
import DoSomething from './Assets/DoSomething-FirstScreen.png'
import Gfriend from './Assets/Gfriend-Home.png'
import BrianResume from './Assets/BrianResume.png'
import BugCat from './Assets/BugCat.png'
import Modal from '@material-ui/core/Modal';
import Cookies from './Assets/KokisKookies.png'
import Tinder from './Assets/Tinder.png'
import MealDeal from './Assets/MealDeal.png'
import AllChat from './Assets/AllChat.png'
import SectionHeader from './Components/General/SectionHeader'
class Designs extends React.Component {
  state = {
    'designs': [{ 'img': Seolhyun }, { 'img': Cookies }, { 'img': Gfriend }, { 'img': BrianResume }, { 'img': BugCat }, { 'img': DoSomething },],
    'open': false,
    'img': "",
    'caseStudies': [ {
      'img': MealDeal,
      'link': "https://docs.google.com/presentation/d/1W11j_CqPqNd_8KSIiBaPbY7_fEI1_8OGAJazVLFWO8s/edit?usp=sharing"
    },
      {
      'img': AllChat,
      'link': "https://docs.google.com/presentation/d/11yU5ObYSRAhzydKTSvyrzEBTrc4tlqyLim0A5DuKCbQ/edit?usp=sharing"
    },
    {
      'img': Tinder,
      'link': "https://docs.google.com/presentation/d/1pUU2kL0FKDxLH_Z-3Lfz0o1QCGLdesDhoMxbWb5Tk6I/edit?usp=sharing"
    },
   ],
  }
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  handleOpen = (image) => {
    console.log("HERE")
    this.setState({ 'open': true });
    this.setState({ 'img': image });
  }
  handleClose = () => {
    console.log("HERE")
    this.setState({ 'open': false });
  }
  render() {
    return (
      <div className="Container" style={{flexDirection:'column', paddingTop: '50px'}}>
        <SectionHeader title={"Design Studies"}></SectionHeader>
        <div className='DesignContainer'>
        {this.state.caseStudies.map(caseStudy => (
              <CaseStudyCard key={caseStudy.img} link={caseStudy.link} img={caseStudy.img} >
              </CaseStudyCard>
            ))}
        </div>
        <SectionHeader title={"For Fun Designs"}></SectionHeader>
        <div style={{ textAlign: 'center' }}>
          <div className='DesignContainer'>
            {this.state.designs.map(design => (
              <DesignCard handleOpen={this.handleOpen} key={design.img} img={design.img} ></DesignCard>
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
