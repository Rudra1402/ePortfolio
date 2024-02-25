import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

function Navbar() {
    const [activePath, setActivePath] = useState("/");
    useEffect(() => {
        const pathname = window.location.pathname;
        console.log(pathname)
    }, [activePath])
    return (
        <div
            className='h-16 w-full py-2 px-8 bg-transparent flex items-center justify-between text-lg leading-none gap-x-8'
        >
            <Link
                to={'/'}
                className={classNames(
                    'tracking-wider py-1.5 px-2.5 rounded font-semibold',
                    activePath == '/'
                        ? 'bg-[#deb887] text-gray-700 shadow shadow-gray-600'
                        : 'bg-transparent text-gray-200'
                )}
                onClick={() => setActivePath('/')}
            >
                Rudra
            </Link>
            <div className='flex items-center gap-x-2.5'>
                <Link
                    to={'/projects'}
                    className={classNames(
                        'py-1.5 px-2.5 rounded tracking-wide',
                        activePath == '/projects'
                            ? 'bg-[#deb887] text-gray-700 shadow shadow-gray-600'
                            : 'bg-transparent text-gray-200'
                    )}
                    onClick={() => setActivePath('/projects')}
                >Projects</Link>
                <Link
                    to={'/experience'}
                    className={classNames(
                        'py-1.5 px-2.5 rounded tracking-wide',
                        activePath == '/experience'
                            ? 'bg-[#deb887] text-gray-700 shadow shadow-gray-600'
                            : 'bg-transparent text-gray-200'
                    )}
                    onClick={() => setActivePath('/experience')}
                >Experience</Link>
                <Link
                    to={'/education'}
                    className={classNames(
                        'py-1.5 px-2.5 rounded tracking-wide',
                        activePath == '/education'
                            ? 'bg-[#deb887] text-gray-700 shadow shadow-gray-600'
                            : 'bg-transparent text-gray-200'
                    )}
                    onClick={() => setActivePath('/education')}
                >Education</Link>
                <Link
                    to={'/skills'}
                    className={classNames(
                        'py-1.5 px-2.5 rounded tracking-wide',
                        activePath == '/skills'
                            ? 'bg-[#deb887] text-gray-700 shadow shadow-gray-600'
                            : 'bg-transparent text-gray-200'
                    )}
                    onClick={() => setActivePath('/skills')}
                >Skills</Link>
            </div>
        </div>
    )
}

export default Navbar