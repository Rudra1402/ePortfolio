import React from 'react'
import { education } from '../../data'
import uwindor from '../../assets/uow.jpg'
import svit from '../../assets/svit.jpg'

function Education() {
    return (
        <div className='h-[calc(100%-64px)] w-full p-4 flex justify-center text-white'>
            <div
                className='grid w-[100%] md:w-[75%] lg:w-[60%] overflow-y-auto grid-cols-1 !gap-y-5'
                style={{ scrollbarWidth: 'none' }}
            >
                {education?.map((edu, index) => (
                    <div
                        key={index}
                        className='flex flex-col gap-y-3 justify-center h-fit rounded-md p-3 shadow shadow-[#12345685] bg-[#12345685] relative z-[1] overflow-hidden'
                    >
                        <div
                            className='absolute top-0 left-0 w-full h-full'
                            style={{
                                backgroundImage: `url(${index === 0 ? uwindor : svit})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundAttachment: 'fixed',
                                backgroundPosition: 'center',
                                backgroundSize: '100% 100%',
                                filter: 'blur(6px)',
                                zIndex: -1,
                                opacity: 0.3,
                            }}
                        ></div>
                        <div className='flex flex-col sm:flex-row items-center justify-center gap-x-3'>
                            <div className='flex flex-col bg-[#0008] w-full text-lg leading-none items-center justify-center gap-y-2 p-3 rounded-md'>
                                <div className='w-full text-green-400'>Institute</div>
                                <div className='w-full tracking-wide'>{edu.institute}</div>
                            </div>
                            <div className='flex flex-col bg-[#0008] w-full text-lg leading-none items-center justify-center gap-y-2 p-3 rounded-md'>
                                <div className='w-full text-green-400'>Degree</div>
                                <div className='w-full tracking-wide'>{edu.courseDegree}</div>
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row items-center justify-center gap-x-3'>
                            <div className='flex flex-col bg-[#0008] w-full text-lg leading-none items-center justify-center gap-y-2 p-3 rounded-md'>
                                <div className='w-full text-green-400'>Major</div>
                                <div className='w-full tracking-wide'>{edu.major}</div>
                            </div>
                            <div className='flex flex-col bg-[#0008] w-full text-lg leading-none items-center justify-center gap-y-2 p-3 rounded-md'>
                                <div className='w-full text-green-400'>Duration</div>
                                <div className='w-full tracking-wide'>{edu.duration}</div>
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row items-center justify-center gap-x-3'>
                            <div className='flex flex-col bg-[#0008] w-full text-lg leading-none items-center justify-center gap-y-2 p-3 rounded-md'>
                                <div className='w-full text-green-400'>Location</div>
                                <div className='w-full tracking-wide'>{edu.city}</div>
                            </div>
                            <div className='flex flex-col bg-[#0008] w-full text-lg leading-none items-center justify-center gap-y-2 p-3 rounded-md'>
                                <div className='w-full text-green-400'>CPGA</div>
                                <div className='w-full'>
                                    {edu.cgpa !== '' ? edu.cgpa : 'N/A'}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education