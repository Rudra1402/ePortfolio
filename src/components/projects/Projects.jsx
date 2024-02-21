import React, { useState } from 'react'
import { projects } from '../../data'
import { BiExpandAlt } from "react-icons/bi";

function Projects() {
    const [isExpand, setIsExpand] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className='h-[calc(100%-64px)] w-full p-4 flex justify-center text-white'>
            <div
                className='grid w-[75%] h-full overflow-y-auto grid-cols-2 gap-4'
                style={{ scrollbarWidth: 'none' }}
            >
                {projects?.map((project, index) => (
                    <div
                        key={index}
                        className='w-[100%] h-fit p-4 rounded-md bg-[#12345685] flex flex-col gap-y-3 shadow shadow-[#12345685] relative'
                    >
                        <BiExpandAlt
                            className='absolute top-3 right-3 cursor-pointer'
                            onClick={() => {
                                setSelectedProject(project)
                                setIsExpand(true)
                            }}
                        />
                        <div
                            className='text-green-400 tracking-wide text-2xl leading-none font-medium'
                        >
                            {project.name}
                        </div>
                        <div
                            className='text-base text-gray-300 leading-none tracking-wide'
                        >
                            {project.category}
                        </div>
                        <div
                            className='flex items-center gap-x-2'
                        >
                            {project.techStack?.map((t, index) => (
                                <div
                                    key={index}
                                    className='py-1 px-2 rounded-sm shadow-md bg-gray-200 text-sm leading-none font-medium text-gray-900'
                                >
                                    {t}
                                </div>
                            ))}
                        </div>
                        <div
                            className='overflow-hidden text-gray-200 text-lg text-ellipsis line-clamp-3'
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