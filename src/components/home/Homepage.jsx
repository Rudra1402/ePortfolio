import classNames from 'classnames';
import React, { useState } from 'react'
import profile from '../../assets/profile.jpg'
import rudra from '../../assets/rudra.JPEG'
import { socials } from '../../data'

function Homepage() {
    const [flipImage, setFlipImage] = useState(true);
    return (
        <div
            className='h-[calc(100%-64px)] p-4 md:p-8 flex md:flex-row flex-col justify-start md:justify-center items-center gap-y-10 md:gap-x-6 text-white w-11/12 md:w-3/4'
        >
            <img
                src={flipImage ? profile : rudra}
                alt="Rudra Patel"
                className={classNames(
                    'rounded-full h-64 md:h-72 w-64 md:w-72 cursor-pointer'
                )}
                onClick={() => setFlipImage(!flipImage)}
            />
            <div className='flex flex-col items-center md:items-start gap-y-4 md:gap-y-4'>
                <div className='text-2xl leading-none tracking-wide'>
                    Hey there, I'm
                </div>
                <div className='text-5xl sm:text-6xl md:text-start text-center md:text-8xl leading-none text-green-500'>
                    Rudra Patel
                </div>
                <div className='text-2xl md:text-start text-center tracking-wide'>
                    A passionate <i className='font-semibold'>Software Developer</i> with expertise in <i className='font-semibold'>Web Technologies</i>!
                </div>
                <div className='flex items-center md:justify-start justify-center gap-x-4 pt-6'>
                    {socials?.map((social, index) => (
                        <div
                            key={index}
                            className=''
                        >
                            <a
                                href={social.url}
                                title={social.name}
                                rel='noreferrer'
                            >
                                <social.Component
                                    className='text-2xl leading-none'
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Homepage