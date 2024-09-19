import React from 'react';
import { workExp } from '../../data';
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaBriefcase, FaTools } from 'react-icons/fa';

function Workexp() {
    return (
        <div className='h-[calc(100%-64px)] w-full p-6 flex justify-center text-gray-900'>
            <div className='grid w-full max-w-5xl overflow-y-auto grid-cols-1 gap-6' style={{ scrollbarWidth: "none" }}>
                {workExp?.map((we, index) => (
                    <div
                        key={index}
                        className='flex flex-col gap-6 p-6 rounded-lg shadow-lg bg-white'
                    >
                        <div className='flex flex-col md:flex-row items-center gap-4'>
                            <div className='flex flex-col gap-y-1.5 w-full text-base leading-none'>
                                <div className='flex items-center gap-0 text-blue-600 font-semibold'>
                                    {/* <FaBriefcase /> */}
                                    Role
                                </div>
                                <div className='tracking-wide'>{we.role}</div>
                            </div>
                            <div className='flex flex-col gap-y-1.5 w-full text-base leading-none'>
                                <div className='flex items-center gap-0 text-blue-600 font-semibold'>
                                    {/* <FaBuilding /> */}
                                    Company
                                </div>
                                <div className='tracking-wide'>{we.company}</div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row items-center gap-4'>
                            <div className='flex flex-col gap-y-1.5 w-full text-base leading-none'>
                                <div className='flex items-center gap-0 text-blue-600 font-semibold'>
                                    {/* <FaCalendarAlt /> */}
                                    Duration
                                </div>
                                <div className='tracking-wide'>{we.duration}</div>
                            </div>
                            <div className='flex flex-col gap-y-1.5 w-full text-base leading-none'>
                                <div className='flex items-center gap-0 text-blue-600 font-semibold'>
                                    {/* <FaMapMarkerAlt /> */}
                                    Location
                                </div>
                                <div className='tracking-wide'>{we.location}</div>
                            </div>
                        </div>
                        {/* <div className='flex flex-col gap-y-1.5 w-full text-base leading-none'>
                            <div className='flex items-center gap-2 text-blue-600 font-semibold'>
                                Tech Stack
                            </div>
                            <div className='overflow-x-auto w-full flex items-center gap-2'>
                                {we.techStack?.map((t, ix) => (
                                    <div key={ix} className='py-1.5 px-2 bg-blue-600 text-gray-100 text-sm leading-none rounded whitespace-nowrap'>
                                        {t}
                                    </div>
                                ))}
                            </div>
                        </div> */}
                        <hr className=''/>
                        <div className='flex flex-col gap-y-3 w-full text-base leading-none'>
                            <div className='flex items-center gap-2 text-blue-600 font-semibold'>
                                Description
                            </div>
                            <div className='text-left'>
                                <ul className='list-disc list-inside space-y-2 pl-5'>
                                    {we.desc?.map((pt, ix) => (
                                        <li key={ix} className='text-justify leading-6'>
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Workexp;