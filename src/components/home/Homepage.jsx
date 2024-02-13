import classNames from 'classnames';
import React, { useState } from 'react'
import profile from '../../assets/profile.jpg'
import rudra from '../../assets/rudra.jpg'
import { socials } from '../../data'

function Homepage() {
    const [flipImage, setFlipImage] = useState(true);
    return (
        <div
            className='h-[calc(100%-64px)] p-8 flex justify-center items-center gap-x-6 text-white w-3/4'
        >
            <img
                src={flipImage ? profile : rudra}
                alt="Rudra Patel"
                className={classNames(
                    'rounded-full h-72 w-72 cursor-pointer'
                )}
                onClick={() => setFlipImage(!flipImage)}
            />
            <div className='flex flex-col gap-y-4'>
                <div className='text-2xl leading-none tracking-wide'>
                    Hey there, I'm
                </div>
                <div className='text-8xl leading-none text-green-500'>
                    Rudra Patel
                </div>
                <div className='text-2xl tracking-wide'>
                    A passionate <i className='font-semibold'>Software Developer</i> with expertise in <i className='font-semibold'>Web Technologies</i>!
                </div>
                <div className='flex items-center gap-x-4 pt-6'>
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