import React from 'react';
import './App.css';
import ExperienceHolder from './ExperienceHolder'
import parsons from './Assets/parsons.png'
import roblox from './Assets/roblox-icon-2.png'
import twc from './Assets/time-warner-logo.jpg'


class ExperiencePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [
                {
                    name: 'Parsons Corporation - Software Engineer',
                    date: 'June 2019 - Present',
                    desc: 'Worked as a developer to support Automation Testing for Company Software. Set up Stress tesing services and testing environments for the different applications.',
                    tech: 'Java, Selenium, Cucumber, Jenkins, Ansible, Bash, Computer Networks',
                    image: parsons
                },
                {
                    name: 'ROBLOX - Game Developer',
                    date: '2014 - Present',
                    desc: 'Independent Game Developer for the website ROBLOX.com. Worked with the company on themed events, media sponsorships, and merchandise.',
                    tech: 'LUA, 3D modeling',
                    image: roblox
                },
                {
                    name: 'Time Warner Cable - NOC Intern',
                    date: 'Summer 2015',
                    desc: 'Interned as a Network Operations Center intern in the general and Systems departments. Monitored network alarms and worked on customer webmail services.',
                    tech: 'Webmail',
                    image: twc
                }
            ]
        }
    }


    render() {
        return (

            <div className="experience">
                <h2 className="experienceTitle title">Experience</h2>
                <div className='experienceContainer'>
                    {this.state.profiles.map(profile => (
                        <ExperienceHolder obj={profile} />))}
                </div>
            </div>
        );
    }
}

export default ExperiencePanel;
