import React from 'react';
import { education } from '../../data';
import uwindor from '../../assets/uow.jpg';
import svit from '../../assets/svit.png';

const images = [uwindor, svit];

function Education() {
    return (
        <div className='h-[calc(100%-64px)] w-full p-6 flex justify-center text-gray-900'>
            <div className='grid w-full max-w-5xl overflow-y-auto grid-cols-1 gap-5'>
                {education?.map((edu, index) => (
                    <div
                        key={index}
                        className='flex flex-col md:flex-row gap-4 p-6 rounded-lg shadow-lg bg-white'
                    >
                        <div className='flex items-center justify-center w-full md:w-1/3'>
                            <img
                                src={images[index]}
                                alt={`${edu.institute} logo`}
                                className='w-full h-40 md:max-w-60 md:min-w-60 object-cover md:min-h-40 rounded-md shadow-md'
                            />
                        </div>
                        <div className='flex flex-col justify-center gap-4 w-2/3'>
                            <div className='flex flex-col md:flex-row items-center gap-4'>
                                <div className='flex flex-col w-full text-base'>
                                    <div className='text-blue-600 font-semibold'>Institute</div>
                                    <div className='tracking-wide'>{edu.institute}</div>
                                </div>
                                <div className='flex flex-col w-full text-base'>
                                    <div className='text-blue-600 font-semibold'>Degree</div>
                                    <div className='tracking-wide'>{edu.courseDegree}</div>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row items-center gap-4'>
                                <div className='flex flex-col w-full text-base'>
                                    <div className='text-blue-600 font-semibold'>Major</div>
                                    <div className='tracking-wide'>{edu.major}</div>
                                </div>
                                <div className='flex flex-col w-full text-base'>
                                    <div className='text-blue-600 font-semibold'>Duration</div>
                                    <div className='tracking-wide'>{edu.duration}</div>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row items-center gap-4'>
                                <div className='flex flex-col w-full text-base'>
                                    <div className='text-blue-600 font-semibold'>Location</div>
                                    <div className='tracking-wide'>{edu.city}</div>
                                </div>
                                <div className='flex flex-col w-full text-base'>
                                    <div className='text-blue-600 font-semibold'>CGPA</div>
                                    <div className='tracking-wide'>
                                        {edu.cgpa !== '' ? edu.cgpa : 'N/A'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;