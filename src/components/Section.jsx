import React from 'react'

const Section = ({children, className, small, id}) => {
  return (
    <div id={id} className={`${small? '' : 'min-h-screen'} flex items-center flex-col  p-10 ${className}`}>
        <div className="flex flex-col max-w-[1200px] w-[100%] px-0 md:p-10">
            {children}
        </div>
    </div>
  )
}

export default Section