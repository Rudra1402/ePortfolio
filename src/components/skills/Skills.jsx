import React from 'react';
import { techSkills } from '../../data';

function Skills() {
    const renderSkills = (category, title) => (
        <div className='w-full max-w-4xl flex flex-col gap-y-4'>
            <div className='text-xl sm:text-2xl font-semibold text-gray-100 px-1'>{title}</div>
            <div className='grid w-full h-full grid-cols-2 gap-4 md:grid-cols-3'>
                {techSkills
                    .filter(x => x.category === category)
                    .map((ts, index) => (
                        <div
                            key={index}
                            className='w-full py-4 px-3 rounded-lg bg-white shadow-md flex items-center justify-center gap-x-3 text-base sm:text-lg'
                        >
                            <ts.Component className='text-2xl sm:text-3xl text-blue-600' />
                            <span className='font-medium'>{ts.sname}</span>
                        </div>
                    ))}
            </div>
        </div>
    );

    return (
        <div
            className='h-[calc(100%-64px)] w-full p-6 flex flex-col items-center overflow-y-auto text-gray-900 gap-y-8'
            style={{ scrollbarWidth: 'none' }}
        >
            {renderSkills('lang', 'Programming Languages')}
            {renderSkills('l&f', 'Libraries & Frameworks')}
            {renderSkills('db', 'Databases')}
            {renderSkills('cloud', 'Cloud Technologies')}
            {renderSkills('vcs', 'Version Control')}
            {renderSkills('cont', 'DevOps/Containerization')}
            {renderSkills('tool', 'Developer Tools')}
        </div>
    );
}

export default Skills;