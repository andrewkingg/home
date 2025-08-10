import React from 'react'
import { motion } from 'motion/react'
const ExperienceCard = ({ work }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x:-50 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
        >
            <div className="bg-white/10 h-full backdrop-blur-md border border-white/20 rounded-xl p-6 w-full text-white shadow-lg flex space-x-4">
                <img className="rounded-md shadow w-20 h-20 object-cover aspect-square" src={work.image} />
                <div>
                    <h2 className="text-xl font-semibold mb-2">{work.title}</h2>
                    <p className="text-sm text-gray-200">
                        {work.name}
                    </p>
                    <p className="text-sm text-gray-200">
                        {work.time}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default ExperienceCard