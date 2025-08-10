import React from 'react'
import Button from './Button'
import { Linkedin, LinkedinIcon, LucideLinkedin } from 'lucide-react'
import { profilePicture } from '../assets/Data'
import { motion } from "motion/react"

const Hero = () => {
    return (
        <div 
        id="home" className='py-20 md:py-0 flex px-10 flex-col justify-center bg-gradient-to-br from-blue-950 via-gray-950 to-teal-950 min-h-[90vh]'>
            <div className="container max-w-[1200px] mx-auto flex flex-col md:flex-row text-white ">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }} 
                        animate={{ opacity: 1, x: 0 }}  
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                className="md:pl-10 order-2 md:order-1 flex-1 flex flex-col justify-center space-y-4 items-center md:items-start">
                    <h1
                        className="text-center md:text-left text-4xl sm:text-5xl font-semibold"><span className="gradient-text">Hi I'm Andrew King</span></h1>
                    <div className="flex space-x-2 text-sm lg:text-base">
                        <div className="p-1 bg-blue-700 text-white rounded px-3">Frontend Developer</div>
                        <div className="p-1 bg-teal-500/90 text-white rounded px-3">UX Designer</div>

                    </div>
                    <p className="mt-2 text-2xl lg:text-3xl font-semibold text-center md:text-left">
                        I work to combine
                        <span className=""> creativity </span>
                        and <span className=""> technology </span>
                        to solve real world problems.
                    </p>

                    <div className="mt-5 flex-col 
                    space-y-3 sm:space-y-0
                    sm:flex-row flex items-center sm:space-x-3">
                        <a href="https://www.linkedin.com/in/andrew-king-500281102/" target="_blank"> <Button> Connect</Button></a>
                        <a href="https://docs.google.com/document/d/1UGsSHjQc2uxM-Psygvig9GexNt0zpHe_XlXYBagqj80/edit?usp=sharing" target="_blank"><Button type="secondary">View Resume</Button></a>
                    </div>

                </motion.div>
                <div className="flex-1 flex items-center justify-center order-1">
                    <img className="mb-10 md:mb-0 w-[50%] sm:w-[40%] md:w-[60%] aspect-square object-cover p-2 sm:p-3 md:p-4 bg-white shadow-lg rounded-full" src={profilePicture} />
                </div>
            </div>
        </div>
    )
}

export default Hero