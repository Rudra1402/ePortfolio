import React from 'react'
import { techSkills } from '../../data'

function Skills() {
    return (
        <div
            className='h-[calc(100%-64px)] w-full p-4 flex flex-col items-center overflow-y-auto text-white gap-y-6'
            style={{ scrollbarWidth: 'none' }}
        >
            <div className='w-[60%] flex flex-col gap-y-3'>
                <div className='text-2xl leading-none px-1'>Languages</div>
                <div
                    className='grid w-[100%] h-full grid-cols-2 gap-3'
                >
                    {techSkills?.filter(x => x.category == 'lang')?.map((ts, index) => (
                        <div
                            key={index}
                            className='w-[100%] py-3 px-2 rounded-md bg-[#12345695] shadow shadow-[#12345695] flex items-center justify-center gap-x-2 text-lg leading-none'
                        >
                            <ts.Component className='text-3xl leading-none' />{ts.sname}
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-[60%] flex flex-col gap-y-3'>
                <div className='text-2xl leading-none px-1'>Libraries & Frameworks</div>
                <div
                    className='grid w-[100%] h-full grid-cols-2 gap-3'
                >
                    {techSkills?.filter(x => x.category == 'l&f')?.map((ts, index) => (
                        <div
                            key={index}
                            className='w-[100%] py-3 px-2 rounded-md bg-[#12345695] shadow shadow-[#12345695] flex items-center justify-center gap-x-2 text-lg leading-none'
                        >
                            <ts.Component className='text-3xl leading-none' />{ts.sname}
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-[60%] flex flex-col gap-y-3'>
                <div className='text-2xl leading-none px-1'>Databases</div>
                <div
                    className='grid w-[100%] h-full grid-cols-2 gap-3'
                >
                    {techSkills?.filter(x => x.category == 'db')?.map((ts, index) => (
                        <div
                            key={index}
                            className='w-[100%] py-3 px-2 rounded-md bg-[#12345695] shadow shadow-[#12345695] flex items-center justify-center gap-x-2 text-lg leading-none'
                        >
                            <ts.Component className='text-3xl leading-none' />{ts.sname}
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-[60%] flex flex-col gap-y-3'>
                <div className='text-2xl leading-none px-1'>Version Control</div>
                <div
                    className='grid w-[100%] h-full grid-cols-2 gap-3'
                >
                    {techSkills?.filter(x => x.category == 'vcs')?.map((ts, index) => (
                        <div
                            key={index}
                            className='w-[100%] py-3 px-2 rounded-md bg-[#12345695] shadow shadow-[#12345695] flex items-center justify-center gap-x-2 text-lg leading-none'
                        >
                            <ts.Component className='text-3xl leading-none' />{ts.sname}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills