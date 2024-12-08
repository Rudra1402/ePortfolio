import classNames from 'classnames';
import React, { useState } from 'react'
import profile from '../../assets/profile.jpg'
import { socials } from '../../data'

function Homepage() {
    return (
      <div
        className='h-[calc(100%-64px)] overflow-auto p-4 md:p-8 flex flex-col md:flex-row justify-start md:justify-center items-center gap-6 md:gap-10 text-white w-11/12 md:w-3/4'
        style={{ scrollbarWidth: "none" }}
      >
        <img
          src={profile}
          alt="Rudra Patel"
          className={classNames(
            'rounded-full h-64 md:h-72 w-64 md:w-72 cursor-pointer hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300'
          )}
        />
        <div className='flex flex-col items-center md:items-start gap-y-4'>
          <div className='text-2xl leading-none tracking-wide'>
            Hey there, I'm
          </div>
          <div className='text-4xl sm:text-5xl text-green-400 md:text-start text-center md:text-6xl leading-none text-gradient'>
            Rudra Patel
          </div>
          <div className='text-lg text-center md:text-start md:leading-relaxed leading-normal tracking-wide'>
            <b>GitHub and Docker certified</b> Full-Stack Software Developer with <b>1 year of experience</b> in Web Technologies like JavaScript and Python. I thrive on crafting innovative solutions that make a difference. Let's connect and explore how I can contribute to your next project! Check out my portfolio for more.
          </div>
          <div className='flex flex-col items-center md:items-start gap-4 py-4'>
            <div className='flex items-center md:justify-start justify-center gap-x-5'>
              {socials?.map((social, index) => (
                <div key={index}>
                  <a href={social.url} title={social.name} rel='noreferrer'>
                    <social.Component className='text-2xl leading-none social-icon' />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  

export default Homepage