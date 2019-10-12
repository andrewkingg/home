import React from 'react';
import './App.css';

class ExperiencePanel extends React.Component {

  render() {
    return (

      <div className="experienceHolder">
        <div className="descHolder">
          <div className="descTitle">
            <p style = {{fontWeight: '600', fontSize : '16px'}}>{this.props.obj.name}</p>
            <p style = {{paddingRight: '5px', fontSize: '15px', marginTop: '2px', fontWeight: '500'}}>{this.props.obj.date}</p>
          </div>
          <p className = 'descBody'>{this.props.obj.desc}</p>
          <p className = "descFooter">{'Technologies: ' +this.props.obj.tech}</p>
        </div>

        <img className='experienceIcon' src={this.props.obj.image} alt=''></img>
      </div>
    );
  }
}

export default ExperiencePanel;
