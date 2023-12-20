import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Link from 'next/link'

const Main = () => {
    return (
        <div id='main' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>Let's Build Something Together</p>
                    <h1 className='py-4 text-gray-700'>Hi,I'm <span className='text-[#5651e5]'>Rahul</span></h1>
                    <h1 className='py-4 text-gray-700'>A Full Stack Web Developer</h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I'm a full stack web developer specializing in building (and ocassionally designing) exceptional digital experiences. Currently I'm focused on building responsive front-end web applications while learning back-end technologies.</p>

                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
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
    )
}

export default Main
