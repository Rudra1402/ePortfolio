import React from 'react'
import { workExp } from '../../data'

function Workexp() {
    return (
        <div className='h-[calc(100%-64px)] w-full p-4 flex justify-center text-white'>
            <div
                className='grid w-[95%] md:w-[75%] lg:w-[60%] h-full overflow-y-auto grid-cols-1 gap-y-4'
                style={{ scrollbarWidth: 'none' }}
            >
                {workExp?.map((we, index) => (
                    <div
                        key={index}
                        className='flex flex-col gap-y-4 justify-center rounded-md px-4 py-6 shadow shadow-[#12345685] bg-[#12345685]'
                    >
                        <div className='flex flex-col md:flex-row w-full text-lg leading-none items-start md:items-center justify-center gap-y-2 md:gap-0'>
                            <div className='w-1/4 md:text-right pr-2 text-green-400'>Role</div>
                            <div className='w-3/4 leading-5 md:leading-none text-left md:pl-1 tracking-wide'>{we.role}</div>
                        </div>
                        <div className='flex flex-col md:flex-row w-full text-lg leading-none items-start md:items-center justify-center gap-y-2 md:gap-0'>
                            <div className='w-1/4 md:text-right pr-2 text-green-400'>Company</div>
                            <div className='w-3/4 leading-5 md:leading-none text-left md:pl-1 tracking-wide'>{we.company}</div>
                        </div>
                        <div className='flex flex-col md:flex-row w-full text-lg items-start md:items-center justify-center gap-y-1 md:gap-0'>
                            <div
                                className='w-1/4 md:text-right pr-2 text-green-400 md:leading-7 m-0'
                            >Description</div>
                            <div className='md:w-3/4 text-left md:pl-1'>
                                <ul
                                    className='m-0 ml-5'
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
                        <div className='flex flex-col md:flex-row w-full !text-base !leading-none items-start md:items-center justify-center gap-y-2 md:gap-0'>
                            <div className='w-1/4 md:text-right pr-2 text-green-400'>Duration</div>
                            <div className='w-3/4 text-left md:pl-1 tracking-wide'>
                                {we.duration}
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row w-full text-lg leading-none items-start md:items-center justify-center gap-y-2 md:gap-0'>
                            <div className='w-1/4 md:text-right pr-2 text-green-400'>Location</div>
                            <div className='w-3/4 text-left md:pl-1'>{we.location}</div>
                        </div>
                        <div className='flex flex-col md:flex-row w-full text-lg leading-none items-start md:items-center justify-center gap-y-2 md:gap-0'>
                            <div className='w-1/4 md:text-right pr-2 text-green-400'>TechStack</div>
                            <div
                                className='overflow-x-auto w-full md:w-3/4 text-left flex items-center gap-x-2 md:pl-1'
                                style={{ scrollbarWidth: 'none' }}
                            >
                                {we.techStack?.map((t, ix) => (
                                    <div
                                        key={ix}
                                        className='py-1 px-2 bg-red-700 text-gray-200 rounded whitespace-nowrap'
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