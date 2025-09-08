import React from 'react'
import Section from './Section'
import { skills } from '../assets/Data'
import { motion } from 'motion/react'

const SkillsSection = () => {

  const skillList = skills;
  return (
    <Section className="bg-gradient-to-tr from-blue-100/80 via-slate-100 to-teal-100/80">
        <div className="flex-1 flex w-full items-center flex-col">
    <h1 className="text-3xl font-semibold mb-15">Software Development Skills</h1>
        <motion.div 
            initial={{ opacity: 0, scale: .9 }} 
                        whileInView={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 flex-1 w-full gap-10">
            {skillList.map((skill)=><div key={skill.name} className="flex flex-col items-center font-semibold shadow aspect-square outline-gray-100 hover:bg-sky-100/70 hover:outline-indigo-300 hover:outline-2 transition rounded-md bg-white/50
            backdrop-blur-md p-6">
                <div className="flex-1 flex items-center justify-center mb-3">
                <img className="h-20 object-contain" src={skill.img} />
                </div>
                <div className="">{skill.name}</div></div>)}
        </motion.div>
        </div>
    </Section>
  )
}

export default SkillsSection