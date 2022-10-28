
import Image from 'next/image'
import React from 'react'
import html from '../public/assets/skills/html.png'
import css from '../public/assets/skills/css.png'
import javascript from '../public/assets/skills/javascript.png'
import github from '../public/assets/skills/github1.png'
import tailwind from '../public/assets/skills/tailwind.png'
import react from '../public/assets/skills/react.png'
import next from '../public/assets/skills/nextjs.png'
import node from '../public/assets/skills/node.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest text-[#5651e5]'>Skills</p>
        <h2>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='cursor-pointer p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image className='' src={html} alt="/" width='64' height='64' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                  <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className='cursor-pointer p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image className='' src={css} alt="/" width='64' height='64' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                  <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className='cursor-pointer p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image className='' src={javascript} alt="/" width='64' height='64' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                  <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className='cursor-pointer p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image className='' src={github} alt="/" width='64' height='64' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                  <h3>GitHub</h3>
              </div>
            </div>
          </div>

          <div className='cursor-pointer p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image className='' src={tailwind} alt="/" width='64' height='64' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                  <h3>TailwindCSS</h3>
              </div>
            </div>
          </div>

          <div className='cursor-pointer p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image className='' src={react} alt="/" width='64' height='64' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                  <h3>ReactJS</h3>
              </div>
            </div>
          </div>

          <div className='cursor-pointer p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image className='' src={next} alt="/" width='64' height='64' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                  <h3>NextJS</h3>
              </div>
            </div>
          </div>

          <div className='cursor-pointer p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image className='' src={node} alt="/" width='64' height='64' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                  <h3>Node</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills