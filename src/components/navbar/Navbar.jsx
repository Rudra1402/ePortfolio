import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from 'react-icons/rx';

function Navbar() {
    const [activePath, setActivePath] = useState("/");
    const [openSidebar, setOpenSidebar] = useState(false);

    useEffect(() => {
        const pathname = window.location.pathname;
        console.log(pathname)
    }, [activePath])

    const mobileSidebar = (
        <div
            className='absolute top-0 left-0 bottom-0 w-3/5 bg-gray-300 text-gray-800 px-8 py-14 flex flex-col gap-y-4 items-center'
        >
            <RxCross2
                className='absolute top-3 right-3 text-3xl leading-none cursor-pointer'
                onClick={() => setOpenSidebar(false)}
            />
            <div className='font-semibold text-2xl font-mono leading-none mb-3'>Rudra Patel</div>
            <Link
                to={'/'}
                className=''
            >
                Home
            </Link>
            <Link
                to={'/projects'}
                className=''
            >
                Projects
            </Link>
            <Link
                to={'/experience'}
                className=''
            >
                Experience
            </Link>
            <Link
                to={'/education'}
                className=''
            >
                Education
            </Link>
            <Link
                to={'/skills'}
                className=''
            >
                Skills
            </Link>
        </div>
    );

    return (
        <div
            className='h-16 w-full py-2 px-8 bg-transparent flex items-center justify-between text-lg leading-none gap-x-8'
        >
            {openSidebar ? mobileSidebar : null}
            {openSidebar
                ? null
                : <GiHamburgerMenu
                    className='md:hidden block text-2xl leading-none text-gray-200 cursor-pointer'
                    onClick={() => setOpenSidebar(true)}
                />}
            <Link
                to={'/'}
                className={classNames(
                    'tracking-wider py-1.5 px-2.5 rounded font-semibold md:block hidden',
                    activePath == '/'
                        ? 'bg-[#deb887] text-gray-800 shadow shadow-gray-600'
                        : 'bg-transparent text-gray-200'
                )}
                onClick={() => setActivePath('/')}
            >
                Rudra
            </Link>
            <div className='hidden md:flex md:items-center gap-x-2.5'>
                <Link
                    to={'/projects'}
                    className={classNames(
                        'py-1.5 px-2.5 rounded tracking-wide',
                        activePath == '/projects'
                            ? 'bg-[#deb887] text-gray-800 shadow shadow-gray-600'
                            : 'bg-transparent text-gray-200'
                    )}
                    onClick={() => setActivePath('/projects')}
                >Projects</Link>
                <Link
                    to={'/experience'}
                    className={classNames(
                        'py-1.5 px-2.5 rounded tracking-wide',
                        activePath == '/experience'
                            ? 'bg-[#deb887] text-gray-800 shadow shadow-gray-600'
                            : 'bg-transparent text-gray-200'
                    )}
                    onClick={() => setActivePath('/experience')}
                >Experience</Link>
                <Link
                    to={'/education'}
                    className={classNames(
                        'py-1.5 px-2.5 rounded tracking-wide',
                        activePath == '/education'
                            ? 'bg-[#deb887] text-gray-800 shadow shadow-gray-600'
                            : 'bg-transparent text-gray-200'
                    )}
                    onClick={() => setActivePath('/education')}
                >Education</Link>
                <Link
                    to={'/skills'}
                    className={classNames(
                        'py-1.5 px-2.5 rounded tracking-wide',
                        activePath == '/skills'
                            ? 'bg-[#deb887] text-gray-800 shadow shadow-gray-600'
                            : 'bg-transparent text-gray-200'
                    )}
                    onClick={() => setActivePath('/skills')}
                >Skills</Link>
            </div>
        </div>
    )
}

export default Navbar