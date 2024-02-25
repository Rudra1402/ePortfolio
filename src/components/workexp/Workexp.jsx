import React from 'react'
import { workExp } from '../../data'

function Workexp() {
    return (
        <div className='h-[calc(100%-64px)] w-full p-4 flex justify-center text-white'>
            <div
                className='grid w-[60%] h-full overflow-y-auto grid-cols-1 gap-y-4'
                style={{ scrollbarWidth: 'none' }}
            >
                {workExp?.map((we, index) => (
                    <div
                        key={index}
                        className='flex flex-col gap-y-4 justify-center rounded-md px-4 py-6 shadow shadow-[#12345685] bg-[#12345685]'
                    >
                        <div className='flex w-full text-lg leading-none items-center justify-center'>
                            <div className='w-1/4 text-right pr-2 text-green-400'>Role</div>
                            <div className='w-3/4 text-left pl-1 tracking-wide'>{we.role}</div>
                        </div>
                        <div className='flex w-full text-lg leading-none items-center justify-center'>
                            <div className='w-1/4 text-right pr-2 text-green-400'>Company</div>
                            <div className='w-3/4 text-left pl-1 tracking-wide'>{we.company}</div>
                        </div>
                        <div className='flex w-full text-lg items-center justify-center'>
                            <div className='w-1/4 text-right pr-2 text-green-400 leading-7'>Description</div>
                            <div className='w-3/4 text-left pl-1'>
                                <ul
                                    className='ml-4'
                                >
                                    {we.desc?.map((pt, ix) => (
                                        <li
                                            key={ix}
                                            className='list-item list-disc'
                                        >
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='flex w-full text-lg leading-none items-center justify-center'>
                            <div className='w-1/4 text-right pr-2 text-green-400'>Duration</div>
                            <div className='w-3/4 text-left pl-1 tracking-wide'>{we.duration}</div>
                        </div>
                        <div className='flex w-full text-lg leading-none items-center justify-center'>
                            <div className='w-1/4 text-right pr-2 text-green-400'>Location</div>
                            <div className='w-3/4 text-left pl-1'>{we.location}</div>
                        </div>
                        <div className='flex w-full text-lg leading-none items-center justify-center'>
                            <div className='w-1/4 text-right pr-2 text-green-400'>TechStack</div>
                            <div className='w-3/4 text-left flex items-center gap-x-2 pl-1'>
                                {we.techStack?.map((t, ix) => (
                                    <div
                                        key={ix}
                                        className='py-1 px-2 bg-red-700 text-gray-200 rounded'
                                    >
                                        {t}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Workexp