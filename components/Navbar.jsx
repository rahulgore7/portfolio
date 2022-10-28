import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)


    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const HandleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', HandleShadow)
    }, [])
    return (
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='#'>
                    <Image className='cursor-pointer' src="/../public/assets/logo3.png" alt="/" width='80' height='50' />
                </Link>

                <div>
                    <ul className='hidden md:flex '>
                        <Link href="/#main">
                            <li className='ml-10 text-sm uppercase hover:border-b hover:text-[#5651e5]'>Home</li>
                        </Link>
                        <Link href="#about">
                            <li className='ml-10 text-sm uppercase hover:border-b hover:text-[#5651e5]'>About Me</li>
                        </Link>
                        <Link href="/#skills">
                            <li className='ml-10 text-sm uppercase hover:border-b hover:text-[#5651e5]'>Skills</li>
                        </Link>
                        <Link href="/#projects">
                            <li className='ml-10 text-sm uppercase hover:border-b hover:text-[#5651e5]'>Projects</li>
                        </Link>
                        <Link href="/#contact">
                            <li className='ml-10 text-sm uppercase hover:border-b hover:text-[#5651e5]'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden '>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>


            <div className={nav ? 'md:hidden first-letter:fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' :
                    'fixed left-[-100%] top-0  p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href='/' >
                                <Image src="/../public/assets/logo3.png" alt="/" width='87' height='35' />
                            </Link>

                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together</p>
                        </div>
                    </div>

                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/#main'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>About Me</li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>

                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <Link href='https://www.linkedin.com/in/rahul-gore-563029228/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B%2Fe8SKqW3TdeYp8Eu4OQnUg%3D%3D' >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaLinkedin />
                                    </div>
                                </Link>
                                <Link href='https://github.com/rahulgore7'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaGithub />
                                    </div>
                                </Link>
                                <Link href='mailto:rahulgore575@gmail.com'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <AiOutlineMail />
                                    </div>
                                </Link>
                                <Link href='tel:+918446331146'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <BsFillPersonLinesFill />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar