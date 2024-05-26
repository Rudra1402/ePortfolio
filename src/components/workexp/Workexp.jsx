import React from 'react'
import { workExp } from '../../data'

function Workexp() {
    return (
        <div className='h-[calc(100%-64px)] w-full p-4 flex justify-center text-white'>
            <div
                className='grid w-[95%] md:w-[75%] lg:w-[60%] h-full overflow-y-auto grid-cols-1 gap-y-5'
                style={{ scrollbarWidth: 'none' }}
            >
                {workExp?.map((we, index) => (
                    <div
                        key={index}
                        className='flex flex-col gap-y-3 justify-center rounded-md px-3 py-4 shadow shadow-[#12345685] bg-[#123456a5]'
                    >
                        <div className='flex items-center justify-center w-full gap-3'>
                            <div className='flex flex-col bg-[#0008] w-1/2 text-base leading-none items-start md:items-start justify-center gap-y-2 p-3 rounded-md'>
                                <div className='w-full text-green-400'>Role</div>
                                <div className='w-full leading-5 md:leading-none text-left tracking-wide'>{we.role}</div>
                            </div>
                            <div className='flex flex-col bg-[#0008] w-1/2 text-base leading-none items-start md:items-start justify-center gap-y-2 p-3 rounded-md'>
                                <div className='w-full text-green-400'>Company</div>
                                <div className='w-full leading-5 md:leading-none text-left tracking-wide'>{we.company}</div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center w-full gap-3'>
                            <div className='flex flex-col bg-[#0008] w-full !text-base !leading-none items-start justify-center gap-y-2 p-3 rounded-md'>
                                <div className='w-full text-green-400'>Duration</div>
                                <div className='w-full text-left tracking-wide'>
                                    {we.duration}
                                </div>
                            </div>
                            <div className='flex flex-col bg-[#0008] w-full text-base leading-none items-start justify-center gap-y-2 p-3 rounded-md'>
                                <div className='w-full text-green-400'>Location</div>
                                <div className='w-full text-left'>{we.location}</div>
                            </div>
                        </div>
                        <div className='flex flex-col bg-[#0008] w-full text-base items-start md:items-start justify-center gap-y-2 p-3 rounded-md'>
                            <div
                                className='w-full text-green-400 m-0'
                            >Description</div>
                            <div className='w-full text-left'>
                                <ul
                                    className='m-0 ml-5'
                                >
                                    {we.desc?.map((pt, ix) => (
                                        <li
                                            key={ix}
                                            className='list-item list-disc text-justify'
                                        >
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col w-full text-base leading-none items-start justify-center gap-y-2 bg-[#0008] p-3 rounded-md'>
                            <div className='w-full text-green-400'>TechStack</div>
                            <div
                                className='overflow-x-auto w-full text-left flex items-center gap-x-2'
                                style={{ scrollbarWidth: 'none' }}
                            >
                                {we.techStack?.map((t, ix) => (
                                    <div
                                        key={ix}
                                        // className='py-1 px-2 bg-gray-200 text-gray-800 rounded whitespace-nowrap'
                                        className='py-0.5'
                                    >
                                        {ix > 0 && <span className="mr-1">|&nbsp;</span>}
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