import React from 'react'
import Button from '../components/Button'
import Hero from '../components/Hero'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'
import ExperienceSection from '../components/ExperienceSection'

const Home = () => {
    return (
      <>
      <Hero/>
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection/>
      </>
    )
}

export default Home