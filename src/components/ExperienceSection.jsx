import React from 'react'
import Section from './Section'
import { education, workExperience } from '../assets/Data'
import ExperienceCard from './ExperienceCard';

const ExperienceSection = () => {
    const workList = workExperience;
    return (
        <Section className=" bg-gradient-to-br text-white from-blue-950 via-gray-900 to-teal-950">
            <div className="flex flex-1 flex-col">
                <h1 className="text-3xl font-semibold mb-10">Work Experience</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {workList.map((work)=><ExperienceCard key={work.name} work={work}/>)}
                </div>
                  <h1 className="text-3xl mt-10 font-semibold mb-10">Education</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {education.map((work)=><ExperienceCard key={work.name} work={work}/>)}
                </div>

            </div>

        </Section>
    )
}

export default ExperienceSection