import React from 'react';
import { education } from '../../data';
import uwindor from '../../assets/uow.jpg';
import svit from '../../assets/svit.png';

// const images = [uwindor, svit];
const images = ["https://firebasestorage.googleapis.com/v0/b/live-urls.appspot.com/o/uow.jpg?alt=media&token=70ab7662-64bb-43d4-a8ee-ceb19424d335", "https://firebasestorage.googleapis.com/v0/b/live-urls.appspot.com/o/svit.png?alt=media&token=11a1b823-16f6-43d0-879d-2141d317400a"]

function Education() {
    return (
        <div className='h-[calc(100%-64px)] w-full p-6 flex justify-center text-gray-900'>
            <div className='grid w-full max-w-5xl overflow-y-auto grid-cols-1 gap-5'
                style={{ scrollbarWidth: "none" }}
            >
                {education?.map((edu, index) => (
                    <div
                        key={index}
                        className='flex flex-col md:flex-row gap-4 p-6 rounded-lg shadow-lg bg-white'
                    >
                        <div className='flex items-center justify-center w-full md:w-1/3'>
                            <img
                                src={images[index]}
                                alt={`${edu.institute} logo`}
                                className='w-full h-44 md:max-w-full md:min-w-full object-cover md:min-h-40 rounded-md shadow-md'
                            />
                        </div>
                        <div className='flex flex-col justify-center gap-4 w-2/3 md:px-3 px-0'>
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