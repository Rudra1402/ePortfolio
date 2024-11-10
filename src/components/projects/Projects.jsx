import React, { useState } from 'react'
import { projects } from '../../data'
import { BiExpandAlt, BiLink } from "react-icons/bi";
import { RxCross2 } from 'react-icons/rx'

function Projects() {
    const [isExpand, setIsExpand] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projectDialog = (
        <div className='absolute bg-[#000c] top-0 bottom-0 left-0 right-0 flex items-center justify-center z-10'>
            <div className='w-11/12 md:w-2/3 h-4/5 rounded-md bg-white flex flex-col gap-y-3.5 p-6 relative shadow-lg'>
                <div className='absolute -top-3 -right-3 bg-red-500 p-1 rounded-full cursor-pointer'>
                    <RxCross2
                        className='text-white text-xl font-semibold'
                        onClick={() => setIsExpand(false)}
                    />
                </div>
                <div className='text-2xl font-semibold text-gray-800'>
                    {selectedProject?.name}
                </div>
                <div className='text-base text-gray-600'>
                    {selectedProject?.category} Project
                </div>
                <div 
                    className='flex items-center w-full overflow-x-auto gap-x-2'
                    style={{ scrollbarWidth: "none" }}
                >
                    {selectedProject?.techStack?.map((t, index) => (
                        <div
                            key={index}
                            className='py-1.5 px-3 rounded bg-blue-500 text-base font-medium text-white shadow whitespace-nowrap'
                        >
                            {t}
                        </div>
                    ))}
                </div>
                <div className='text-gray-700 text-lg text-justify leading-relaxed'>
                    {selectedProject?.desc}
                </div>
            </div>
        </div>
    );

    return (
        <div className='h-[calc(100%-64px)] w-full p-4 flex justify-center relative'>
            {isExpand && projectDialog}
            <div className='grid w-full max-w-6xl h-full overflow-y-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
                style={{ scrollbarWidth: "none" }}
            >
                {projects?.map((project, index) => (
                    <div
                        key={index}
                        className='p-4 rounded-lg bg-white flex flex-col gap-y-3 shadow-lg hover:shadow-2xl transition-shadow duration-300'
                    >
                        <div className='flex items-center justify-between'>
                            <div className='text-lg font-semibold text-gray-800'>
                                {(index + 1) + ". " + project.name}
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <BiExpandAlt
                                    className='cursor-pointer text-gray-600 hover:text-gray-800 transition duration-200'
                                    onClick={() => {
                                        setSelectedProject(project)
                                        setIsExpand(true)
                                    }}
                                />
                                {project.isOnGithub && (
                                    <a href={project?.ghUrl} target={'_blank'} rel="noopener noreferrer">
                                        <BiLink className='text-lg text-gray-600 hover:text-gray-800 transition duration-200' />
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className='text-sm text-gray-500'>
                            {project.category} Project
                        </div>
                        <div
                            className='flex items-center gap-x-2 w-full text-blue-600 text-sm overflow-x-auto'
                            style={{ scrollbarWidth: "none" }}
                        >
                            {project.techStack?.map((t, index) => (
                                <div key={index} className='flex items-center whitespace-nowrap'>
                                    {index > 0 && <span className="mr-2">|</span>}
                                    {t}
                                </div>
                            ))}
                        </div>
                        <div className='text-gray-700 text-sm leading-6 overflow-hidden text-ellipsis line-clamp-4'>
                            {project.desc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
