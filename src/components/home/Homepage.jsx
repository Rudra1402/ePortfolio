import classNames from 'classnames';
import React, { useState } from 'react'
import profile from '../../assets/profile.jpg'
import { socials } from '../../data'

function Homepage() {
    return (
        <div
            className='h-[calc(100%-64px)] p-4 md:p-8 flex md:flex-row flex-col justify-start md:justify-center items-center gap-y-10 md:gap-x-10 text-white w-11/12 md:w-3/4'
        >
            <img
                src={profile}
                alt="Rudra Patel"
                className={classNames(
                    'rounded-full h-64 md:h-72 w-64 md:w-72 cursor-pointer'
                )}
            />
            <div className='flex flex-col items-center md:items-start gap-y-4 md:gap-y-4'>
                <div className='text-2xl leading-none tracking-wide'>
                    Hey there, I'm
                </div>
                <div className='text-4xl sm:text-5xl md:text-start text-center md:text-6xl leading-none text-green-500'>
                    Rudra Patel
                </div>
                <div className='text-lg md:text-justify text-center tracking-wide'>
                A passionate Full-Stack Software Developer specializing in Web Technologies like JavaScript and Python. I thrive on crafting innovative solutions that make a difference. Let's connect and explore how I can contribute to your next project! Check out my portfolio for more.
                </div>
                <div className='flex items-center md:justify-start justify-center gap-x-5 pt-6'>
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