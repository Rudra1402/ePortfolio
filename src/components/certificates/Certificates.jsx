import React from 'react'
import { certificactions } from '../../data'

function Certificates() {
    return (
        <div
            className='h-[calc(100%-64px)] w-full p-6 flex flex-col items-center overflow-y-auto text-gray-900 gap-y-8'
            style={{ scrollbarWidth: 'none' }}
        >
            <div className='w-full max-w-4xl flex flex-col gap-y-4'>
                {certificactions.map((certi, index) => (
                    <div key={index} className='flex items-center justify-between gap-4 bg-white rounded-lg p-6'>
                        <div className='flex items-center gap-4'>
                            <certi.Component className='text-5xl text-blue-500' />
                            <div className='flex flex-col'>
                                <a
                                    href={certi.certiurl}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-lg font-semibold text-blue-600 hover:underline'
                                >
                                    {certi.name}
                                </a>
                                <p className='text-sm text-gray-500'>
                                    Issued by {certi.issuedby}
                                </p>
                                <p className='text-sm text-gray-500'>
                                    Issue Date: {certi.issuedate}
                                </p>
                            </div>
                        </div>

                        <div>
                            <a
                                href={certi.certiurl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 transition'
                            >
                                View Certificate
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certificates