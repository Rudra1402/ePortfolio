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
            className='h-16 w-full py-2 px-8 bg-transparent flex items-center justify-between text-gray-300 text-lg leading-none gap-x-8'
        >
            <Link
                to={'/'}
                className={classNames(
                    'italic tracking-wide py-1.5 px-2.5 rounded',
                    activePath == '/' ? 'bg-[#123456bb] shadow shadow-gray-600' : 'bg-transparent'
                )}
                onClick={() => setActivePath('/')}
            >
                Rudra
            </Link>
            <div className='flex items-center gap-x-2.5'>
                {/* <Link
                    to={'/'}
                    className={classNames(
                        '',
                        activePath == '/' ? 'underline underline-offset-4' : '')
                    }
                    onClick={() => setActivePath('/')}
                >Home</Link> */}
                <Link
                    to={'/projects'}
                    className={classNames(
                        'py-1.5 px-2.5 rounded tracking-wide',
                        activePath == '/projects' ? 'bg-[#123456bb] shadow shadow-gray-600' : 'bg-transparent')
                    }
                    onClick={() => setActivePath('/projects')}
                >Projects</Link>
                <Link
                    to={'/experience'}
                    className={classNames(
                        'py-1.5 px-2.5 rounded tracking-wide',
                        activePath == '/experience' ? 'bg-[#123456bb] shadow shadow-gray-600' : 'bg-transparent')
                    }
                    onClick={() => setActivePath('/experience')}
                >Experience</Link>
                <Link
                    to={'/education'}
                    className={classNames(
                        'py-1.5 px-2.5 rounded tracking-wide',
                        activePath == '/education' ? 'bg-[#123456bb] shadow shadow-gray-600' : 'bg-transparent')
                    }
                    onClick={() => setActivePath('/education')}
                >Education</Link>
                <Link
                    to={'/skills'}
                    className={classNames(
                        'py-1.5 px-2.5 rounded tracking-wide',
                        activePath == '/skills' ? 'bg-[#123456bb] shadow shadow-gray-600' : 'bg-transparent')
                    }
                    onClick={() => setActivePath('/skills')}
                >Skills</Link>
            </div>
        </div>
    )
}

export default Navbar