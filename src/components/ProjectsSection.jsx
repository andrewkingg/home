import React from 'react'
import Section from './Section'
import { projects } from '../assets/Data'
import Button from './Button';

const ProjectsSection = () => {
  const recentProjects = projects.slice(0,3);
  return (
    <Section id="projects" className=""> 
        <h1 className="text-3xl font-semibold mb-10">Recent Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {recentProjects.map((x,i)=><a href={x.url} target="_blank" key={x.name}><div className=' border h-full border-gray-300 rounded-xl overflow-hidden bg-white cursor-pointer hover:scale-102 transition flex flex-col relative'>
                <img className="object-cover w-full aspect-video " src={x.image}/>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xl font-bold mb-2">{x.name}</div>
                            <div
                            className=" flex space-x-1 absolute top-2
                             right-2"
                            > 
                            {x.type?.map((type, i)=><div 
                            key={i}
                            className={`${type!='Design' ? 'bg-blue-600' :'bg-rose-500'} shadow text-white px-5 text-sm 
            
                             py-[2px]
                             rounded-full py-0`}>{type}</div>
                             
                            )}</div>
                  <div className="mb-2 text-gray-500 text-sm">{x.time}</div>
                  
                  <div className="mb-3">
                    {x.title}
                  </div>
                  <div className="mt-auto text-blue-600">
                    {x.linkText}
                  </div>
                </div>
              
            </div></a>)}
                          

        </div>
        <div className="flex justify-center mt-15">
          <Button>View All Projects</Button>

        </div>
    </Section>
  )
}

export default ProjectsSection