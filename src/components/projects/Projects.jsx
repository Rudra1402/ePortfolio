import React, { useState } from 'react'
import { projects } from '../../data'
import { BiExpandAlt, BiLink } from "react-icons/bi";
import { RxCross2 } from 'react-icons/rx'

function Projects() {
    const [isExpand, setIsExpand] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projectDialog = (
        <div
            className='absolute bg-[#000c] top-0 bottom-0 left-0 right-0 flex items-center justify-center z-10'
        >
            <div
                className='w-2/3 h-4/5 rounded-md bg-gray-200 flex flex-col gap-y-3.5 p-4 relative'
            >
                <div
                    className='absolute -top-3 -right-3 bg-red-500 p-1 rounded-full cursor-pointer'
                >
                    <RxCross2
                        className='text-gray-100 font-semibold text-xl leading-none'
                        onClick={() => setIsExpand(false)}
                    />
                </div>
                <div className='text-2xl leading-none text-gray-800'>
                    {selectedProject?.name}
                </div>
                <div
                    className='text-base text-gray-600 leading-none tracking-wide'
                >
                    {selectedProject?.category} Project
                </div>
                <div
                    className='flex items-center w-full overflow-x-auto gap-x-2'
                >
                    {selectedProject?.techStack?.map((t, index) => (
                        <div
                            key={index}
                            className='py-1.5 px-2.5 rounded-sm shadow-md bg-blue-500 text-base leading-none font-medium text-gray-200'
                        >
                            {t}
                        </div>
                    ))}
                </div>
                <div
                    className='text-gray-700 text-lg text-justify'
                >
                    {selectedProject?.desc}
                </div>
            </div>
        </div>
    );

    return (
        <div
            className='h-[calc(100%-64px)] w-full p-4 flex justify-center text-white relative'
        >
            {isExpand ? projectDialog : null}
            <div
                className='grid w-[92%] sm:w-[65%] md:w-[85%] lg:w-[75%] h-full overflow-y-auto grid-cols-1 md:grid-cols-2 gap-4'
                style={{ scrollbarWidth: 'none' }}
            >
                {projects?.map((project, index) => (
                    <div
                        key={index}
                        className='w-[100%] h-fit p-2 rounded-md bg-[#123456a5] flex flex-col gap-y-2 shadow shadow-[#12345685] relative'
                    >
                        <div className='flex items-center justify-between bg-[#0008] rounded p-2.5 w-full gap-x-4'>
                            <div
                                className='text-green-400 tracking-wide text-xl leading-none font-medium'
                            >
                                {(index + 1) + ". " + project.name}
                            </div>
                            <div className='flex flex-row-reverse items-center gap-x-2'>
                                <BiExpandAlt
                                    className='cursor-pointer hover:-rotate-90 transition duration-200'
                                    onClick={() => {
                                        setSelectedProject(project)
                                        setIsExpand(true)
                                    }}
                                />
                                {project.isOnGithub
                                    ? <a
                                        href={project?.ghUrl}
                                        target={'_blank'}
                                    >
                                        <BiLink
                                            className='text-lg cursor-pointer leading-none text-gray-100'
                                        />
                                    </a>
                                    : null
                                }
                            </div>
                        </div>
                        <div
                            className='text-xs text-gray-100 mx-1 flex items-center gap-x-2 my-1 py-1 px-2 rounded bg-blue-600 w-fit leading-none tracking-wide'
                        >
                            {project.category} Project
                        </div>
                        <div
                            className='flex items-center gap-x-2 w-full px-1 overflow-x-auto text-green-400'
                            style={{ scrollbarWidth: 'none' }}
                        >
                            {project.techStack?.map((t, index) => (
                                <div
                                    key={index}
                                // className='py-1 px-2 rounded-sm shadow-md bg-gray-200 text-sm leading-none font-medium text-gray-900'
                                >
                                    {index > 0 && <span className="mr-1">|&nbsp;</span>}
                                    {t}
                                </div>
                            ))}
                        </div>
                        <div
                            className='overflow-hidden text-gray-200 text-sm leading-6 text-ellipsis line-clamp-4 sm:line-clamp-4 px-1 text-justify'
                        >
                            {project.desc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects