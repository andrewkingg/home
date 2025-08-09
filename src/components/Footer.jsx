import React from 'react'
import Section from './Section'
import { Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <>
    <Section className="bg-black text-white" small>
       <div id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 pb-8">
        <div>
         <h1 className='text-2xl font-semibold mb-5'>Contact</h1>
         <div className='flex space-x-2 flex-row items-center text-gray-300'><Mail size="20"/><p>andrewking22098@gmail.com</p></div>
         </div>
         <div>
                     <h1 className='text-2xl font-semibold mb-5'>Socials</h1>

        <div className="flex mt-3 items-start">
             <a href="https://www.linkedin.com/in/andrew-king-500281102/" target="_blank"> <div className="bg-white p-3 rounded-full text-black"><Linkedin/></div></a></div></div>
            </div>
    </Section>
    <div className="text-center bg-black p-2 text-sm text-gray-200 border-t border-gray-600">
                 <p>© 2025 Andrew King. All Rights Reserved.</p>

    </div>
    </>
  )
}

export default Footer