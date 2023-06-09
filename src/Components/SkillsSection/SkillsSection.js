import React from 'react';
import htmllogo from '../../Assets/HTML-logo.png'
import csslogo from '../../Assets/CSS-logo.png'
import javascriptlogo from '../../Assets/JavaScript-logo.png'
import reactlogo from '../../Assets/React-icon.svg.png'
import vuelogo from '../../Assets/vue-logo.png'
import SectionHeader from '../General/SectionHeader'

const SkillsSection = ({}) => {
const skills = [{name: 'React JS', img: reactlogo}, {name: 'Vue', img: vuelogo}, {name: 'HTML', img: htmllogo}, {name: 'CSS', img: csslogo}, {name: 'Javascript', img: javascriptlogo}]
  return (
      <div className="gray-bg py-5">
    <div className="container">
      <SectionHeader title="Developer Skills" center/>
      <div className="row m-0 justify-content-between">
            {skills.map((skill)=> (<div className="d-flex flex-column items-center text-center col-12 col-sm-6 col-md-2 mb-4"
            >
                <img className="mb-3" style={{height: '150px', minWidth: '0', objectFit: 'contain'}} src={skill.img} alt=''></img>

                {skill.name}
            </div>))}
      </div>
    </div>
    </div>
  );
}

export default SkillsSection;
