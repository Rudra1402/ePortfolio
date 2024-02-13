import React from 'react'
import { techSkills } from '../../data'

function Skills() {
    return (
        <div className='h-[calc(100%-64px)] w-full p-4 flex justify-center text-white'>
            <div
                className='grid w-[60%] h-full overflow-y-auto grid-cols-2 gap-3'
            >
                {techSkills?.map((ts, index) => (
                    <div
                        key={index}
                        className='w-[100%] py-3 px-2 rounded-md bg-[#12345695] shadow shadow-[#12345695] flex items-center justify-center gap-x-2 text-lg leading-none'
                    >
                        <ts.Component className='text-3xl leading-none' />{ts.sname}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills