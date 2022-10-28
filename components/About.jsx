import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am ?</h2>
                <p className='py-2 text-gray-600'>I specialize in building mobile responsive front-end UI applications that connect with API’s and other backend technologies. I’m passionate about learning new technologies and understand there is more than one way to accomplish a task. Though I am most proficient in building front-end applications using HTML, CSS, Javascript, and React, I am a quick learner and can pick up new tech stacks as needed. I believe that being a great developer is not using one specific language, but choosing the best tool for the job.</p>
                <p className='py-2 text-gray-600'>I started web development in 2020 and by far the journey has been amazing. I got to learn lot of new skills and technologies. Through my previous internship, I got to connect with other like-minded developers and the opportunity to work as a team. I am also highly involved in various open-source collaborations like Hacktoberfest and Google LTE fest.</p>
                <Link href='/#projects'><p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p></Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image  className='rounded-xl' src="/../public/assets/profile.jpg" alt="/" width='220' height='50' />
            </div>
        </div>
    </div>
  )
}

export default About